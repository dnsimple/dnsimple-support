import { createApp } from 'vue';
import App from './components/app/component.vue';

const elementId = 'dnsimple-support-widget';
let $target = document.querySelector(`#${elementId}`);

if (!$target) {
  $target = document.createElement('div');
  $target.id = elementId;
  document.body.appendChild($target);
}

const $openers = [...document.querySelectorAll('[data-open-support-widget]')];
const app = createApp(App, {
  showPrompt: $openers.length === 0
}).mount($target);

$openers.forEach(($el) => {
  $el.addEventListener('click', () => {
    app.open();
    app.focus();
  });
});
