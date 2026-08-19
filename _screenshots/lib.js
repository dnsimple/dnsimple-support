// Pure logic for the screenshot refresher: article scanning, capture-spec
// parsing, placeholder resolution, and pixel comparison. No Playwright here so
// it all runs under `node --test`.
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

const IMAGE_RE = /!\[[^\]]*\]\(\/files\/([a-z0-9-]+\.png)\)/g;
const CAPTURE_RE = /<!--\s*capture:\s*(\S+)\s*-->/;

// A capture comment binds to the image reference it follows: either trailing
// on the same line, or on the next non-blank line.
function extractSpecs(markdown, articlePath) {
  const specs = [];
  const lines = markdown.split('\n');
  for (let i = 0; i < lines.length; i += 1) 
    for (const match of lines[i].matchAll(IMAGE_RE)) {
      const file = match[1];
      const rest = lines[i].slice(match.index + match[0].length);
      let comment = rest.match(CAPTURE_RE);
      if (!comment) {
        let j = i + 1;
        while (j < lines.length && lines[j].trim() === '') j += 1;
        if (j < lines.length) comment = lines[j].match(CAPTURE_RE);
      }
      if (!comment) continue;
      const [path, ...fragmentParts] = comment[1].split('#');
      const fragment = fragmentParts.join('#') || null;
      specs.push({ file, path, fragment, article: articlePath });
    }
  
  return specs;
}

// One screenshot file may be referenced from several articles; the specs must
// agree or the refresher refuses to guess.
function mergeSpecs(specs) {
  const byFile = new Map();
  for (const spec of specs) {
    const existing = byFile.get(spec.file);
    if (!existing) 
      byFile.set(spec.file, spec);
     else if (existing.path !== spec.path || existing.fragment !== spec.fragment) 
      throw new Error(
        `Conflicting capture specs for ${spec.file}: `
        + `${existing.article} says ${describe(existing)}, ${spec.article} says ${describe(spec)}`
      );
    
  }
  return [...byFile.values()];
}

function describe(spec) {
  return spec.fragment ? `${spec.path}#${spec.fragment}` : spec.path;
}

function resolvePath(path, vars) {
  return path.replace(/\{(\w+)\}/g, (_, name) => {
    if (!vars[name]) 
      throw new Error(`Capture path ${path} needs {${name}} but SCREENSHOT_${name.toUpperCase()} is not set`);
    
    return vars[name];
  });
}

// A bare identifier fragment is looked up as an element id, then as a
// data-screenshot hook the app can add without design impact. Anything else is
// taken as a raw CSS selector.
function fragmentToSelectors(fragment) {
  if (/^[A-Za-z][\w-]*$/.test(fragment)) 
    return [`#${fragment}`, `[data-screenshot="${fragment}"]`];
  
  return [fragment];
}

// True when the new capture is meaningfully different from the file on disk.
// The threshold absorbs pngquant quantization and anti-aliasing jitter so an
// unchanged page doesn't churn out a weekly PR.
function pngsDiffer(bufferA, bufferB, { threshold = 0.1, maxDiffRatio = 0.001 } = {}) {
  const a = PNG.sync.read(bufferA);
  const b = PNG.sync.read(bufferB);
  if (a.width !== b.width || a.height !== b.height) return true;
  const diffPixels = pixelmatch(a.data, b.data, null, a.width, a.height, { threshold });
  return diffPixels / (a.width * a.height) > maxDiffRatio;
}

// Pulls the account id out of the app's own links (/a/<id>/...), so the
// account never has to be configured anywhere.
function accountFromHrefs(hrefs) {
  for (const href of hrefs) {
    const match = href && href.match(/\/a\/([^/]+)\//);
    if (match) return match[1];
  }
  return null;
}

module.exports = { extractSpecs, mergeSpecs, resolvePath, fragmentToSelectors, pngsDiffer, describe, accountFromHrefs };
