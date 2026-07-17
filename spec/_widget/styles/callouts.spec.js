/**
 * @jest-environment node
 */
import { resolve } from 'path';
import { compile, compileString } from 'sass-embedded';

// Callout styles are a shared mixin, deliberately applied both site-wide and
// inside the widget. The widget's compiled CSS is injected into third-party
// host pages (dnsimple.com and others), so any selector it emits at the
// document root lands on those pages. The mixin must therefore stay inert on
// its own: consumers include it in their own scope, and the widget's copy stays
// under `#dnsimple-support` so it never reaches the host page.
describe('callout styles', () => {
  const cssDir = resolve(__dirname, '../../../content/assets/css');

  // Compile the widget article stylesheet the way the build does: `@use "callouts"`
  // resolves against content/assets/css via the same load path as vite.config.js.
  const compileWidget = () => compile(
    resolve(__dirname, '../../../_widget/src/components/article/style.scss'),
    { loadPaths: [cssDir] }
  ).css;

  it('scopes every widget callout rule under the widget root', () => {
    const css = compileWidget();

    expect(css).toContain('#dnsimple-support .article .callout');
    // A root-level `.callout {` (column 0) is an unscoped rule that would leak
    // into the host page when the widget bundle is injected.
    expect(css).not.toMatch(/^\.callout[\s.,{:]/m);
  });

  it('emits nothing on its own, so using it never leaks css', () => {
    const css = compileString('@use "callouts";', { loadPaths: [cssDir] }).css;

    expect(css.trim()).toBe('');
  });

  it('emits callouts where a consumer includes it, keeping the site styled', () => {
    const css = compileString(
      '@use "callouts"; @include callouts.callout-styles;',
      { loadPaths: [cssDir] }
    ).css;

    expect(css).toMatch(/^\.callout \{/m);
    expect(css).toContain('.callout-warning');
  });
});
