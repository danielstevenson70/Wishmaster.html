'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');


var generateWishResults = document.querySelector('#generateWishResults');
var myWishList = document.querySelector('#myWishList');
generateWishResults.addEventListener('click', function() {
    console.log('Wish List Button Clicked');
    var inputItems = document.querySelectorAll('input');

    function createWishList() {
        var listElement = document.createElement('ul');
        inputItems.forEach(function (inputItem) {
            var listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            listElement.appendChild(listItem);
        });
        myWishList.appendChild(listElement);

    }
    function generateWishResults() {
        var wishList = [];
        inputItems.forEach(function (inputItem) {
            if (inputItem.value) {
                wishList.push(inputItem.value);
            }
        });
        return wishList;
    }
    var wishList = generateWishResults();
    console.log('Wish List:', wishList);

    function resultsWishList() {
            var listElement = document.createElement('ul');
            wishList.forEach(function (wishItem) {
                var listItem = document.createElement('li');
                listItem.innerText = wishItem;
                listElement.appendChild(listItem);
            });
            myWishList.appendChild(listElement);
        }
    });
});