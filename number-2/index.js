'use strict';

let btn = document.querySelector('.btn');

let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }

    if (validity.tooShort) {
        errors.push('Пароль должен быть больше 8 символов');
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");
    let input = document.querySelector("input");

    for (input of inputs) {
        checkValidity(input);
    }

    document.getElementById("result").innerHTML = errors.join('. </br>');
}

btn.addEventListener('click',checkAll);
