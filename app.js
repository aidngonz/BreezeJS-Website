import { createLayer, createState, createForm } from './node_modules/breezejs-web/src/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breezejs-web/src/helpers.js';

// Layers:
const header = createLayer('header', 10);
const about = createLayer('about', 20);
const more = createLayer('more', 30);

createElementAndAppend(header.element, 'h1', {}, 'BreezeJS');
createElementAndAppend(header.element, 'h3', {}, 'Breeze.js is a lightweight JavaScript framework designed for simplified web development, focusing on DOM manipulation and state management.');