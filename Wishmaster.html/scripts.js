'use strict';

 let wishCount = 0;
 let maxWishes = 3;


function handleWish(event) {
    event.preventDefault();
    const wishInput = document.getElementById('wishInput');
    const wishItem = document.getElementById('wish');
    const wishText = wishInput.value();
    const wishList = document.getElementById('wishList');
    const wishCount = document.getElementById('wishCount');
    const response = document.getElementById('response');

function grantWish() {
    if (wishCount <= maxWishes) {
        wishCount++;
        document.getElementById('wishCount').textContent = 'Wish Granted: ' + wishCount;
    }   else {
        alert("Number of wishes have been fulfilled")
    } 
        
    }

    if (!wish) return;

    if (wishcount === maxWish) {
        showpopup();
    }
}

    if (wishCount >= maxWishes) {
        showPopup();
    }


function showPopup() {
    document.getElementById('geniePopup').classList.add('show');
}

function hidePopup() {
    document.getElementById('geniePopup').classList.remove('show');
}


