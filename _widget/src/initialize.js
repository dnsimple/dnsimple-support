import { createApp } from 'vue';
import App from './components/app/component.vue';
import styles from './styles.scss?inline';

// Puts the widget's CSS in its own shadow root rather than the host's <head>.
// adoptedStyleSheets where it exists, a <style> inside the root otherwise.
const adoptStyles = (root, doc) => {
  if ('adoptedStyleSheets' in Document.prototype && 'replaceSync' in CSSStyleSheet.prototype) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles);
    root.adoptedStyleSheets = [sheet];
    return;
  }

  const $style = doc.createElement('style');
  $style.textContent = styles;
  root.appendChild($style);
};

export default (doc, options = {}) => {
  const elementId = 'dnsimple-support-widget';
  const $openers = [...doc.querySelectorAll('[data-dnsimple-open-support-widget]')];

  let $host = doc.querySelector(`#${elementId}`);

  if (!$host) {
    $host = doc.createElement('div');
    $host.id = elementId;
    doc.body.insertBefore($host, doc.body.firstChild);
  }

  // The widget is embedded in sites we do not control, and its markup and CSS
  // are no business of theirs. A shadow root is the isolation: nothing here
  // matches their selectors, and nothing of theirs matches ours.
  const root = $host.shadowRoot || $host.attachShadow({ mode: 'open' });
  adoptStyles(root, doc);

  const $mount = doc.createElement('div');
  root.appendChild($mount);

  const sourcesAttr = doc.querySelector('[data-dnsimple-sources]')?.getAttribute('data-dnsimple-sources');
  const sources = sourcesAttr ? JSON.parse(sourcesAttr) : undefined;

  const app = createApp(App, Object.assign({
    showPrompt: $openers.length === 0,
    currentSiteUrl: doc.querySelector('[data-dnsimple-current-site-url]')?.getAttribute('data-dnsimple-current-site-url') || '',
    gettingStartedUrl: doc.querySelector('[data-dnsimple-getting-started-url]')?.getAttribute('data-dnsimple-getting-started-url') || '/articles/getting-started/',
    ...(sources && { sources }),
  }, options)).mount($mount);

  $openers.forEach(($el) => {
    $el.addEventListener('click', () => {
      app.open();
      app.focus();
    });
  });

  return app;
};
