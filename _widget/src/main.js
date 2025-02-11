import { createApp } from 'vue';
import App from './components/app/component.vue';

const elementId = 'dnsimple-support-widget';
const $openers = [...document.querySelectorAll('[data-dnsimple-open-support-widget]')];

let $target = document.querySelector(`#${elementId}`);

if (!$target) {
  $target = document.createElement('div');
  $target.id = elementId;
  document.body.insertBefore($target, document.body.firstChild);
}

const app = createApp(App, {
  showPrompt: $openers.length === 0,
  currentSiteUrl: document.querySelector('[data-dnsimple-current-site-url]')?.getAttribute('data-dnsimple-current-site-url') || ''
}).mount($target);

$openers.forEach(($el) => {
  $el.addEventListener('click', () => {
    app.open();
    app.focus();
  });
});
