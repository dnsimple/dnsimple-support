# Screenshot refresher

Keeps `content/files/*.png` in sync with the live app. A weekly GitHub Action
(`.github/workflows/screenshots.yml`) logs into the app, re-captures every
annotated screenshot, compresses it with pngquant, and opens a PR when pixels
actually changed.

## Annotating an article

The capture spec lives in the article, next to the image it refreshes. Add an
HTML comment on the line after the image (or trailing on the same line):

```markdown
![screenshot of the API & Access page](/files/access-tokens.png)
<!-- capture: /a/{account}/account/api_tokens -->
```

- The path is app-relative. `{account}` is auto-detected from the app's own
  `/a/<id>/` links after login; `{domain}` comes from the `SCREENSHOT_DOMAIN`
  repository variable once a spec needs it.
- Add a `#fragment` to clip the shot to one element instead of the viewport:
  `<!-- capture: /a/{account}/domains#zone-list -->`. A bare name is looked up
  as an element id, then as a `data-screenshot="..."` attribute (a stable hook
  the app can add without design impact). Anything else (`#.model-table`) is
  used as a raw CSS selector.
- Screenshots without an annotation are simply never refreshed.
- The same file annotated from two articles must have identical specs;
  conflicts fail the run and name both articles.

Captures are 1280x800 at 2x scale (retina), matching the existing screenshots.

## Running locally

```bash
cd _screenshots && npm install && npx playwright install chromium
```

```bash
node capture.js --list
```

`--list` prints the specs without touching the app. A real run needs:

```bash
SCREENSHOT_EMAIL=... SCREENSHOT_PASSWORD=... node capture.js
```

(or put them in a gitignored `_screenshots/config.json`:
`{ "email": "...", "domain": "..." }` — env vars override it).

`npm test` runs the parser/diff specs.

## CI setup (one-time)

1. Create a dedicated account on <https://sandbox.dnsimple.com> with 2FA
   disabled, and seed it with the domains the screenshots need.
2. Repository secrets: `SCREENSHOT_EMAIL` and `SCREENSHOT_PASSWORD`. The
   account id is auto-detected at runtime; the base URL defaults to sandbox
   (`SCREENSHOT_BASE_URL` variable overrides it), and `SCREENSHOT_DOMAIN` is
   only needed once a capture spec uses `{domain}`.
3. In Settings > Actions > General, enable "Allow GitHub Actions to create and
   approve pull requests" (needed by peter-evans/create-pull-request).

## How churn is avoided

A re-captured page rarely produces byte-identical PNGs. The runner decodes old
and new images and replaces the file only when more than 0.1% of pixels differ
beyond an anti-aliasing threshold, so an unchanged app produces no PR.
