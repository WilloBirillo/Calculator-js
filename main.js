function addParameters(num1, num2) {
    return num1 + num2;
}

function subParameters(num1, num2) {
    return num1 - num2;
}

function multiplyParameters(num1, num2) {
    return num1 * num2;
}

function divideParameters(num1, num2) {
    return num1 / num2;
}

let firstNumber;
let secondNumber;
let operator;

function operate(num1, num2, operator) {
    if (operator === "+") {
        addParameters(num1, num2);
    } else if( operator === "-"){
        subParameters(num1, num2);
    } else if (operator === "*"){
        multiplyParameters(num1, num2);
    } else if (operator === "/"){
        divideParameters(num1, num2);
    }
}



