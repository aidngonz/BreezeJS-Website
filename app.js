import { createLayer, createState, createForm } from './node_modules/breezejs-web/src/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breezejs-web/src/helpers.js';

// Layers:
const header = createLayer('header', 10);
const about = createLayer('about', 20);
const more = createLayer('more', 30);

createElementAndAppend(header.element, 'h1', {classListAdd: 'bigHeader'}, 'BreezeJS');
createElementAndAppend(header.element, 'h3', {classListAdd: 'sub'}, 'Breeze.js is a lightweight JavaScript framework designed for simplified web development, focusing on DOM manipulation and state management.');

createElementAndAppend(about.element, 'h3', {classListAdd: 'sub'}, 'With a minimalist approach, it offers essential functionalities such as creating DOM elements (newElement), managing document layers (Layer), handling application state (State), create forms and collect form data (Form), and utility functions (Helpers) to streamline development tasks.')