"use strict";
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

let createLi = text => {
    let li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function(evt){
    evt.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    createLi(input.value);
    input.value="";
})

data.forEach(item => {
    createLi(item);
});

btn.addEventListener('click', function(){
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
})