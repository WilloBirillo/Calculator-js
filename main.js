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

function operate(num1, num2, operator) {
  if (operator === "+") {
    return addParameters(num1, num2);
  } else if (operator === "-") {
    return subParameters(num1, num2);
  } else if (operator === "*") {
    return multiplyParameters(num1, num2);
  } else if (operator === "/") {
    return divideParameters(num1, num2);
  }
  return undefined;
}

const number_button = document.querySelectorAll(".number");
const display = document.querySelector("#calculator-display");
const operator_button = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
display.value = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "firstNumber";

equals.addEventListener("click", selectNumbers);
clear.addEventListener("click", selectNumbers);

for (let i = 0; i < operator_button.length; i++) {
  operator_button[i].addEventListener("click", selectNumbers);
}
for (let i = 0; i < number_button.length; i++) {
  number_button[i].addEventListener("click", selectNumbers);
}

function displayNumbers(event) {
  const numberSelected = event.target.value;
  display.textContent += numberSelected;
  return numberSelected;
}

function displayOperator(event) {
  const operatorSelected = event.target.value;
  display.textContent = operatorSelected;
  return operatorSelected;
}

function selectNumbers(event) {
  if (event.target.classList.contains("number")) {
    if (currentInput === "firstNumber") {
      firstNumber += displayNumbers(event);
      console.log(firstNumber);
    } else if (currentInput === "secondNumber") {
      secondNumber += displayNumbers(event);
      display.textContent = secondNumber;
    }
  } else if (
    event.target.classList.contains("operator") &&
    currentInput === "firstNumber"
  ) {
    operator = displayOperator(event);
    currentInput = "secondNumber";
  } else if (event.target.classList.contains("equals")) {
    let num1 = +firstNumber;
    let num2 = +secondNumber;
    //* Calculate the operation with the same number if the second number is not given
    if (secondNumber === ""){
        num2 = +firstNumber;
    }
    let result = operate(num1, num2, operator);
    display.textContent = result;
    firstNumber = result;
    secondNumber ="";
    operator ="";
    currentInput = "firstNumber";
  } else if (event.target.classList.contains("clear")) {
    currentInput = "firstNumber";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "";
  }
}