const { test } = require('node:test');
const assert = require('node:assert');
const { PNG } = require('pngjs');
const { extractSpecs, mergeSpecs, resolvePath, fragmentToSelectors, pngsDiffer, accountFromHrefs } = require('../lib');

test('extracts a spec from a comment on the next line', () => {
  const md = [
    '![screenshot of the API & Access page](/files/access-tokens.png)',
    '<!-- capture: /a/{account}/account/api_tokens -->',
  ].join('\n');
  assert.deepStrictEqual(extractSpecs(md, 'a.md'), [
    { file: 'access-tokens.png', path: '/a/{account}/account/api_tokens', fragment: null, article: 'a.md' },
  ]);
});

test('extracts a spec with a fragment, same line, blank lines between', () => {
  const sameLine = '![x](/files/one.png) <!-- capture: /domains#zone-list -->';
  assert.deepStrictEqual(extractSpecs(sameLine, 'a.md')[0], {
    file: 'one.png', path: '/domains', fragment: 'zone-list', article: 'a.md',
  });

  const blankBetween = '![x](/files/two.png)\n\n<!-- capture: /domains -->';
  assert.strictEqual(extractSpecs(blankBetween, 'a.md').length, 1);
});

test('ignores images without a capture comment', () => {
  const md = '![x](/files/plain.png)\n\nSome paragraph.';
  assert.deepStrictEqual(extractSpecs(md, 'a.md'), []);
});

test('merge dedupes agreeing specs and rejects conflicts', () => {
  const agree = [
    { file: 'a.png', path: '/x', fragment: null, article: 'one.md' },
    { file: 'a.png', path: '/x', fragment: null, article: 'two.md' },
  ];
  assert.strictEqual(mergeSpecs(agree).length, 1);

  const conflict = [
    { file: 'a.png', path: '/x', fragment: null, article: 'one.md' },
    { file: 'a.png', path: '/y', fragment: null, article: 'two.md' },
  ];
  assert.throws(() => mergeSpecs(conflict), /Conflicting capture specs for a\.png/);
});

test('resolves placeholders and rejects missing ones', () => {
  assert.strictEqual(resolvePath('/a/{account}/domains/{domain}', { account: '123', domain: 'x.com' }), '/a/123/domains/x.com');
  assert.throws(() => resolvePath('/a/{account}/domains', {}), /SCREENSHOT_ACCOUNT/);
});

test('fragment resolves to id then data-screenshot, or raw CSS', () => {
  assert.deepStrictEqual(fragmentToSelectors('zone-list'), ['#zone-list', '[data-screenshot="zone-list"]']);
  assert.deepStrictEqual(fragmentToSelectors('.model-table'), ['.model-table']);
});

test('accountFromHrefs finds the first account-scoped link', () => {
  assert.strictEqual(accountFromHrefs(['/login', '/a/1234/domains', '/a/9/contacts']), '1234');
  assert.strictEqual(accountFromHrefs(['/login', null, '/about']), null);
});

function solidPng(width, height, rgb) {
  const png = new PNG({ width, height });
  for (let i = 0; i < width * height; i += 1) {
    png.data[i * 4] = rgb[0];
    png.data[i * 4 + 1] = rgb[1];
    png.data[i * 4 + 2] = rgb[2];
    png.data[i * 4 + 3] = 255;
  }
  return PNG.sync.write(png);
}

test('pngsDiffer: identical false, different true, resized true', () => {
  const white = solidPng(20, 20, [255, 255, 255]);
  const alsoWhite = solidPng(20, 20, [255, 255, 255]);
  const black = solidPng(20, 20, [0, 0, 0]);
  const bigger = solidPng(30, 20, [255, 255, 255]);
  assert.strictEqual(pngsDiffer(white, alsoWhite), false);
  assert.strictEqual(pngsDiffer(white, black), true);
  assert.strictEqual(pngsDiffer(white, bigger), true);
});
