import { createLayer, createState, createForm } from './node_modules/breezejs-web/src/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breezejs-web/src/helpers.js';

// Layers:
const more = createLayer('more', 10);
const header = createLayer('header', 20);
const about = createLayer('about', 30);

createElementAndAppend(header.element, 'h1', {classListAdd: 'bigHeader'}, 'BreezeJS');
createElementAndAppend(header.element, 'h3', {classListAdd: 'sub'}, 'Breeze.js is a lightweight JavaScript framework designed for simplified web development, focusing on DOM manipulation and state management.');

createElementAndAppend(about.element, 'h3', {classListAdd: 'sub'}, 'With a minimalist approach, it offers essential functionalities such as creating DOM elements (newElement), managing document layers (Layer), handling application state (State), create forms and collect form data (Form), and utility functions (Helpers) to streamline development tasks.')

createElementAndAppend(more.element, 'a', {'href': 'https://github.com/aidngonz/Breeze.js', classListAdd: 'navLink'}, 'Github')
createElementAndAppend(more.element, 'a', {'href': 'https://github.com/aidngonz/Breeze.js/blob/main/Documentation.md', classListAdd: 'navLink'}, 'Documentation')
createElementAndAppend(more.element, 'a', {'href': 'https://www.npmjs.com/package/breezejs-web', classListAdd: 'navLink'}, 'NPM');
createElementAndAppend(more.element, 'a', {'href': 'https://github.com/aidngonz', classListAdd: 'navLink'}, 'Created by Aiden Gonzalez');