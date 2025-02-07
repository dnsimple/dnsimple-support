import { createApp } from 'vue';
import App from './components/app/component.vue';

document.addEventListener('DOMContentLoaded', () => {
  const elementId = 'dnsimple-support-widget';
  const $openers = [...document.querySelectorAll('[data-dnsimple-open-support-widget]')];

  let $target = document.querySelector(`#${elementId}`);

  if (!$target) {
    $target = document.createElement('div');
    $target.id = elementId;
    document.body.insertBefore($target, document.body.firstChild);
  }

  const app = createApp(App, {
    showPrompt: $openers.length === 0
  }).mount($target);

  $openers.forEach(($el) => {
    $el.addEventListener('click', () => {
      app.open();
      app.focus();
    });
  });
});
