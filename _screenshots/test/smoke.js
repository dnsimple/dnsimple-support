#!/usr/bin/env node
// End-to-end smoke test, no credentials needed: boots a fake app with the real
// login form field names, points capture.js at a temp content tree, and checks
// the full pipeline — login, account auto-detection, viewport and fragment
// captures, compression, and the no-churn second run.
//
// Usage: node test/smoke.js
const http = require('node:http');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');

const PAGE = (body) => `<!doctype html><html><head><style>
  body { font: 16px sans-serif; margin: 0; background: #f5f5f5; }
  main { padding: 40px; }
  .card { background: #fff; border: 1px solid #ddd; padding: 24px; }
</style></head><body><main>${body}</main></body></html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/login' && req.method === 'GET') 
    res.end(PAGE(`<h1>Log In</h1>
      <form method="post" action="/login">
        <input type="email" name="user_session[email]">
        <input type="password" name="user_session[password]">
        <button type="submit">Log in</button>
      </form>`));
   else if (req.url === '/login' && req.method === 'POST') 
    res.writeHead(302, { Location: '/' }).end();
   else if (req.url === '/') 
    res.end(PAGE('<h1>Dashboard</h1><a href="/a/424242/domains">My Account</a>'));
   else if (req.url === '/a/424242/account/api_tokens') 
    res.end(PAGE(`<h1>API &amp; Access</h1>
      <div class="card" id="token-list">one lonely token</div>`));
   else 
    res.writeHead(404).end('not found');
  
});

function fixtureTree() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'smoke-content-'));
  fs.mkdirSync(path.join(root, 'content', 'articles'), { recursive: true });
  fs.mkdirSync(path.join(root, 'content', 'files'), { recursive: true });
  fs.writeFileSync(path.join(root, 'content', 'articles', 'tokens.md'), [
    '![full page](/files/smoke-page.png)',
    '<!-- capture: /a/{account}/account/api_tokens -->',
    '',
    '![just the card](/files/smoke-card.png)',
    '<!-- capture: /a/{account}/account/api_tokens#token-list -->',
    '',
  ].join('\n'));
  return root;
}

// Async so the fake server (same process) can keep answering while the
// capture child runs.
async function runCapture(root, port) {
  const { stdout } = await promisify(execFile)('node', [path.join(__dirname, '..', 'capture.js')], {
    env: {
      ...process.env,
      SCREENSHOT_CONTENT_ROOT: root,
      SCREENSHOT_BASE_URL: `http://localhost:${port}`,
      SCREENSHOT_EMAIL: 'smoke@example.com',
      SCREENSHOT_PASSWORD: 'not-a-real-password',
    },
  });
  return stdout;
}

function expect(condition, message) {
  if (!condition) {
    console.error(`SMOKE FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`ok - ${message}`);
}

server.listen(0, async () => {
  const { port } = server.address();
  const root = fixtureTree();
  try {
    const first = await runCapture(root, port);
    expect(first.includes('Detected account 424242'), 'account auto-detected from app links');
    expect(first.includes('NEW smoke-page.png'), 'viewport capture written');
    expect(first.includes('NEW smoke-card.png'), 'fragment capture written');

    const page = path.join(root, 'content', 'files', 'smoke-page.png');
    const card = path.join(root, 'content', 'files', 'smoke-card.png');
    expect(fs.statSync(card).size < fs.statSync(page).size, 'fragment capture smaller than full page');

    const second = await runCapture(root, port);
    expect(second.includes('UNCHANGED smoke-page.png') && second.includes('UNCHANGED smoke-card.png'),
      'second run detects no changes (no churn)');
    console.log('SMOKE PASS');
  } finally {
    server.close();
    fs.rmSync(root, { recursive: true, force: true });
  }
});
