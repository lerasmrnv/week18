"use strict";

const form = document.querySelector('form');
const div = document.querySelector('.messages');
const btn = document.querySelector('.btn');
const userName = document.querySelector('.userName');
const comment = document.querySelector('.comment');
const img = document.querySelector('.img');

let messagesArray = [];
// if (localStorage.getItem('messages')){
//     messages = JSON.parse(localStorage.getItem('messages'));
// }
localStorage.setItem('messages', JSON.stringify(messagesArray));
const data = JSON.parse(localStorage.getItem('messages'));

function createP(){
    const p = document.createElement('p');
    p.className ='text';
    p.innerHTML = `<img width="40px" hight="auto" src="${img.value}">  ${userName.value} : ${comment.value}`;
    
    div.appendChild(p);
}

btn.addEventListener('click', function(evt){
    evt.preventDefault();

    messagesArray.push({
        url: img.value,
        name: userName.value,
        text: comment.value
    })
    localStorage.setItem('messages', JSON.stringify(messagesArray));

    createP();
    comment.value = '';
})

data.forEach(messages => {
    createP(messages);
});
