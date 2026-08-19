#!/usr/bin/env node
// Refreshes support-article screenshots from the live app.
//
// Scans content/articles/*.md for annotated images:
//
//   ![screenshot of the API & Access page](/files/access-tokens.png)
//   <!-- capture: /a/{account}/account/api_tokens -->
//
// then logs into the app, captures each page (clipped to the element named by
// the #fragment when one is given), compresses with pngquant when available,
// and overwrites content/files/*.png only when pixels meaningfully changed.
//
// Usage: node capture.js [--list]
//
// Required env: SCREENSHOT_EMAIL and SCREENSHOT_PASSWORD (repo secrets in CI).
// {account} is auto-detected from the app's own /a/<id>/ links after login,
// and the base URL defaults to sandbox. An optional local config.json can
// supply email/account/domain/baseUrl; env always overrides it.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { chromium } = require('playwright');
const { extractSpecs, mergeSpecs, resolvePath, fragmentToSelectors, describe, accountFromHrefs } = require('./lib');

const CONFIG_FILE = path.join(__dirname, 'config.json');
const CONFIG = fs.existsSync(CONFIG_FILE) ? JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')) : {};

const ROOT = process.env.SCREENSHOT_CONTENT_ROOT || path.join(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT, 'content', 'articles');
const FILES_DIR = path.join(ROOT, 'content', 'files');
const VIEWPORT = { width: 1280, height: 800 };
const SCALE = 2; // existing screenshots are retina captures

// Freeze animations and carets so reruns of an unchanged page produce
// near-identical pixels.
const FREEZE_CSS = '*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }'
  + ' #dnsimple-support-widget { display: none !important; }';

function loadSpecs() {
  const specs = [];
  for (const name of fs.readdirSync(ARTICLES_DIR)) {
    if (!name.endsWith('.md')) continue;
    const markdown = fs.readFileSync(path.join(ARTICLES_DIR, name), 'utf8');
    specs.push(...extractSpecs(markdown, `content/articles/${name}`));
  }
  return mergeSpecs(specs);
}

function compress(file) {
  const result = spawnSync('pngquant', ['--force', '--skip-if-larger', '--quality', '65-90', '--ext', '.png', file]);
  if (result.error && result.error.code === 'ENOENT') return 'pngquant not installed, skipped';
  // 98 = --skip-if-larger declined; 99 = below quality floor. Both leave the original.
  if (result.status !== 0 && result.status !== 98 && result.status !== 99) 
    throw new Error(`pngquant failed (${result.status}): ${result.stderr}`);
  
  return null;
}

async function login(page, baseUrl, email, password) {
  await page.goto(`${baseUrl}/login`);
  await page.fill('input[name="user_session[email]"]', email);
  await page.fill('input[name="user_session[password]"]', password);
  await Promise.all([
    page.waitForURL((url) => !url.pathname.startsWith('/login'), { timeout: 15000 }),
    page.getByRole('button', { name: 'Log in' }).click(),
  ]);
  if (page.url().includes('multi_factor')) 
    throw new Error('AUTH_FAILED: account requires 2FA — the screenshot account must have 2FA disabled');
  
  // Login may land on a different origin than the marketing site (e.g.
  // sandbox.dnsimple.com -> app.sandbox.dnsimple.com). Capture paths are
  // app-relative, so they resolve against wherever login actually landed.
  return new URL(page.url()).origin;
}

async function capture(page, appOrigin, spec, vars, tmpDir) {
  const url = appOrigin + resolvePath(spec.path, vars);
  const response = await page.goto(url, { waitUntil: 'load' });
  if (!response.ok()) throw new Error(`HTTP ${response.status()} at ${url}`);
  if (new URL(page.url()).pathname.startsWith('/login')) throw new Error(`redirected to login at ${url}`);
  await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
  await page.addStyleTag({ content: FREEZE_CSS });
  // Hide environment chrome that shouldn't appear in docs: the sandbox ribbon
  // (an inline-styled div, no class to target) and floating chat widgets
  // (fixed-position iframes).
  await page.evaluate(() => {
    // #CC473D is the sandbox red: the ribbon (background) and the full-width
    // strip under the navbar (a border on the ribbon's wrapper). Neither
    // exists in production.
    const SANDBOX_RED = 'rgb(204, 71, 61)';
    for (const el of document.querySelectorAll('div')) {
      const s = getComputedStyle(el);
      const redBorder = ['Top', 'Bottom'].some((side) =>
        s[`border${side}Color`] === SANDBOX_RED && s[`border${side}Width`] !== '0px');
      if (s.backgroundColor === SANDBOX_RED || redBorder) el.style.display = 'none';
    }
    for (const el of document.querySelectorAll('iframe')) 
      if (getComputedStyle(el).position === 'fixed') el.style.display = 'none';
    
  });
  await page.waitForTimeout(500);

  const tmpFile = path.join(tmpDir, spec.file);
  if (spec.fragment) {
    let target = null;
    for (const selector of fragmentToSelectors(spec.fragment)) {
      const locator = page.locator(selector).first();
      if (await locator.count()) { target = locator; break; }
    }
    if (!target) throw new Error(`no element matches #${spec.fragment} on ${url}`);
    await target.scrollIntoViewIfNeeded();
    await target.screenshot({ path: tmpFile });
  } else 
    await page.screenshot({ path: tmpFile });
  
  return tmpFile;
}

async function main() {
  const specs = loadSpecs();
  if (process.argv.includes('--list')) {
    for (const spec of specs) console.log(`${spec.file} <- ${describe(spec)} (${spec.article})`);
    console.log(`${specs.length} capture spec(s)`);
    return;
  }
  if (specs.length === 0) {
    console.log('No capture specs found in content/articles — nothing to do.');
    return;
  }
  const email = process.env.SCREENSHOT_EMAIL || CONFIG.email;
  const password = process.env.SCREENSHOT_PASSWORD || CONFIG.password;
  if (!email) throw new Error('SCREENSHOT_EMAIL must be set');
  if (!password) throw new Error('SCREENSHOT_PASSWORD must be set');

  const baseUrl = (process.env.SCREENSHOT_BASE_URL || CONFIG.baseUrl || 'https://sandbox.dnsimple.com').replace(/\/$/, '');
  const vars = {
    account: process.env.SCREENSHOT_ACCOUNT || CONFIG.account,
    domain: process.env.SCREENSHOT_DOMAIN || CONFIG.domain,
  };
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'screenshots-'));

  // SCREENSHOT_BROWSER_CHANNEL=chrome uses a system-installed Chrome (GitHub
  // runners ship one), so CI downloads no browser at all. Unset, Playwright
  // uses its own Chromium (local runs).
  const browser = await chromium.launch({ channel: process.env.SCREENSHOT_BROWSER_CHANNEL || undefined });
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: SCALE });
  const page = await context.newPage();

  const failures = [];
  let changed = 0;
  try {
    const appOrigin = await login(page, baseUrl, email, password);
    if (appOrigin !== baseUrl) console.log(`App origin: ${appOrigin}`);
    if (!vars.account && specs.some((spec) => spec.path.includes('{account}'))) {
      const hrefs = await page.$$eval('a[href]', (links) => links.map((a) => a.getAttribute('href')));
      vars.account = accountFromHrefs([page.url(), ...hrefs]);
      if (!vars.account) throw new Error('could not auto-detect the account id from the post-login page');
      console.log(`Detected account ${vars.account}`);
    }
    for (const spec of specs) 
      try {
        const tmpFile = await capture(page, appOrigin, spec, vars, tmpDir);
        const note = compress(tmpFile);
        const destFile = path.join(FILES_DIR, spec.file);
        const status = replaceIfChanged(tmpFile, destFile);
        if (status !== 'UNCHANGED') changed += 1;
        console.log(`${status} ${spec.file}${note ? ` (${note})` : ''}`);
      } catch (error) {
        failures.push(spec);
        console.error(`FAILED ${spec.file}: ${error.message}`);
      }
    
  } finally {
    await browser.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }

  console.log(`Done: ${changed} changed, ${specs.length - changed - failures.length} unchanged, ${failures.length} failed.`);
  if (failures.length) process.exit(1);
}

function replaceIfChanged(tmpFile, destFile) {
  const { pngsDiffer } = require('./lib');
  if (!fs.existsSync(destFile)) {
    fs.copyFileSync(tmpFile, destFile);
    return 'NEW';
  }
  if (pngsDiffer(fs.readFileSync(destFile), fs.readFileSync(tmpFile))) {
    fs.copyFileSync(tmpFile, destFile);
    return 'CHANGED';
  }
  return 'UNCHANGED';
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
