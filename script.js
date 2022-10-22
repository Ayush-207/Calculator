var result = document.querySelector('#result');

var divv = document.querySelector('#divv');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var zero = document.querySelector('#zero');
var mult = document.querySelector('#mult');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var clr = document.querySelector('#clear');
var mult = document.querySelector('#mult');
var perc = document.querySelector('#perc');
var sign = document.querySelector('#sign');
var dec = document.querySelector('#dec');
var equal = document.querySelector('#equal');

var store;


function addOne() {
    if (result.innerText == 0) {
        result.innerText = '1';
        return;
    }
    result.innerText += '1';
}

function addTwo() {
    if (result.innerText == 0) {
        result.innerText = '2';
        return;
    }
    result.innerText += '2';
}

function addThree() {
    if (result.innerText == 0) {
        result.innerText = '3';
        return;
    }
    result.innerText += '3';
}

function addFour() {
    if (result.innerText == 0) {
        result.innerText = '4';
        return;
    }
    result.innerText += '4';
}

function addFive() {
    if (result.innerText == 0) {
        result.innerText = '5';
        return;
    }
    result.innerText += '5';
}

function addSix() {
    if (result.innerText == 0) {
        result.innerText = '6';
        return;
    }
    result.innerText += 6;
}

function addSeven() {
    if (result.innerText == 0) {
        result.innerText = '7';
        return;
    }
    result.innerText += 7;
}

function addEight() {
    if (result.innerText == 0) {
        result.innerText = '8';
        return;
    }
    result.innerText += 8;
}

function addNine() {
    if (result.innerText == 0) {
        result.innerText = '9';
        return;
    }
    result.innerText += 9;
}

function div() {
    result.innerText += ' / ';
}

function multFunc() {
    result.innerText += ' * ';
}

function minusFunc() {
    result.innerText += " - ";
}

function plusFunc() {
    result.innerText += " + ";
}

function percFunc() {
    result.innerText /= 100;
}

function signFunc() {
    result.innerText *= '-1';
}

function clear() {
    result.innerText = 0;
    store = "";
}

function addZero() {
    var x = result.innerText;
    if (x[x.length - 1] == '/') {
        result.innerText = 'Error';
        return;
    }
    result.innerText += 0;
}

function equalFunc() {
    console.log(eval(result.innerText));
    result.innerText = eval(result.innerText);
    store = result.innerText;
}

equal.addEventListener('click', equalFunc);
divv.addEventListener('click', div);
mult.addEventListener('click', multFunc);
plus.addEventListener('click', plusFunc);
minus.addEventListener('click', minusFunc);
perc.addEventListener('click', percFunc);
sign.addEventListener('click', signFunc);
one.addEventListener('click', addOne);
two.addEventListener('click', addTwo);
three.addEventListener('click', addThree);
four.addEventListener('click', addFour);
five.addEventListener('click', addFive);
six.addEventListener('click', addSix);
seven.addEventListener('click', addSeven);
eight.addEventListener('click', addEight);
nine.addEventListener('click', addNine);
zero.addEventListener('click', addZero);
clr.addEventListener('click', clear);












