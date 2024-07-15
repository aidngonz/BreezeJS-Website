import { createLayer, createState, createForm } from './node_modules/breezejs-web/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breezejs-web/helpers.js';

// Layers:
const layer1 = createLayer('layer1', 10);
const layer2 = createLayer('layer2', 20);
const layer3 = createLayer('layer3', 30);

// Elements:
createElementAndAppend(layer1.element, 'h1', { classListAdd: 'blue' }, 'Hello World in Layer');
createElementAndAppend(layer1.element, 'p', {}, 'This is a paragraph in layer 1.');

// Buttons and Reactivity:
const buttonState = createState({ count: 0 });

let button = appendElementWithListener(layer2.element, 'button', {}, 'click', () => {
    buttonState.setState({ count: buttonState.getState().count + 1 });
});

button.textContent = `Clicked ${buttonState.getState().count} times`;

buttonState.addListener((state) => {
    button.textContent = `Clicked ${state.count} times`;
});

// Form:
const form = createForm('form', layer3);
form.addInput('firstInput', 'placeholder');
form.addSubmit('submit', 'Submit');
form.getDataOnSubmit();