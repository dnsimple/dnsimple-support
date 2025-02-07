import { createApp } from 'vue';
import App from './components/app/component.vue';

const elementId = 'dnsimple-support-widget';
let $target = document.querySelector(`#${elementId}`);

if (!$target) {
  $target = document.createElement('div');
  $target.id = elementId;
  document.body.appendChild($target);
}

createApp(App).mount($target);
