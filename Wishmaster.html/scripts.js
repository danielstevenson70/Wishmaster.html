'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    const generateListButton = document.querySelector('#generateList');
    const myList = document.querySelector('#myList');

    generateListButton.addEventListener('click', function() {
        const inputItems = document.querySelectorAll('input');
        

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            listElement.appendChild(listItem);
        });

        myList.appendChild(listElement);
    });
});