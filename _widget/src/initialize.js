import { createApp } from 'vue';
import App from './components/app/component.vue';

export default (doc, options = {}) => {
  const elementId = 'dnsimple-support-widget';
  const $openers = [...doc.querySelectorAll('[data-dnsimple-open-support-widget]')];

  let $target = doc.querySelector(`#${elementId}`);

  if (!$target) {
    $target = doc.createElement('div');
    $target.id = elementId;
    doc.body.insertBefore($target, doc.body.firstChild);
  }

  const sourcesAttr = doc.querySelector('[data-dnsimple-sources]')?.getAttribute('data-dnsimple-sources');
  const sources = sourcesAttr ? JSON.parse(sourcesAttr) : undefined;

  const app = createApp(App, Object.assign({
    showPrompt: $openers.length === 0,
    currentSiteUrl: doc.querySelector('[data-dnsimple-current-site-url]')?.getAttribute('data-dnsimple-current-site-url') || '',
    gettingStartedUrl: doc.querySelector('[data-dnsimple-getting-started-url]')?.getAttribute('data-dnsimple-getting-started-url') || '/articles/getting-started/',
    ...(sources && { sources }),
  }, options)).mount($target);

  $openers.forEach(($el) => {
    $el.addEventListener('click', () => {
      app.open();
      app.focus();
    });
  });

  return app;
};
