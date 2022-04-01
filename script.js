let displayDiv = document.querySelector("#display");
displayDiv.innerText = '0';
let num1 = 0;
let result = 0;
let operator = '';
let holder = '';

function press(value) {
    holder += value;
    displayDiv.innerText = holder;
}

function setOP(op) {
    if(holder == '' && result > 0) {
        operator = op;
        num1 = result;
        holder = '';
        displayDiv.innerText = '0';
    } else{
        operator = op;
        num1 = parseInt(holder);
        holder = '';
        displayDiv.innerText = '0';
    }
}

function calculate() {
    if(operator == '+') {
        result = num1 + parseInt(holder);
        displayDiv.innerText = result;
        operator = '';
        holder = '';
    } else if(operator == '-') {
        result = num1 - parseInt(holder);
        displayDiv.innerText = result;
        operator = '';
        holder = '';
    } else if(operator == '*') {
        result = num1 * parseInt(holder);
        displayDiv.innerText = result;
        operator = '';
        holder = '';
    } else if(operator == '/') {
        result = num1 / parseInt(holder);
        displayDiv.innerText = result;
        operator = '';
        holder = '';
    }
}

function clr() {
    displayDiv.innerText = '0';
    num1 = 0;
    result = 0;
    holder = '';
    operator = '';
}