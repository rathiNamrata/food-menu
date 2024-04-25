/**
 * Create a flight element.
 *
 * @param {object} btn - An object containing information about a button.
 * @returns {HTMLElement} - The created button element for filtering items.
 */


import filterHandler from '../handlers/filterHandler.js';

const createButton = (btn) => {
    // create a button
    const button = document.createElement('button');
    button.type = 'button';
    button.id = btn.id;
    button.classList.add('filter-btn');
    button.innerText = btn.text;

    // add event to btn
    button.addEventListener('click', () => {
        const { id } = button;
        filterHandler(id);
    });

    return button;
};

export default createButton;