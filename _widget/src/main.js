import { createApp } from 'vue';
import App from './components/app/component.vue';

const $openers = [...document.querySelectorAll('[data-open-support-widget]')];
const app = createApp(App, {
  showPrompt: $openers.length === 0
}).mount('#support-widget');

$openers.forEach(($el) => {
  $el.addEventListener('click', () => {
    app.open();
  });
});
