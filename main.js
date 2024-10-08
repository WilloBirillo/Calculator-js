const number_button = document.querySelectorAll(".number");
const display = document.querySelector("#calculator-display");
const operator_button = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");

//* Base values
display.value = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentInput = "firstNumber";
firstNumber = firstNumber.substring(0, 10);
secondNumber = secondNumber.substring(0, 10);

backspace.addEventListener("click", selectNumbers);
decimal.addEventListener("click", selectNumbers);
equals.addEventListener("click", selectNumbers);
clear.addEventListener("click", selectNumbers);
operator_button.forEach((button) => button.addEventListener("click", selectNumbers));
number_button.forEach((button) => button.addEventListener("click", selectNumbers));

function selectNumbers(event) {
  if (event.target.classList.contains("number")) {
    if (currentInput === "firstNumber") {
      firstNumber += displayNumbers(event);
      firstNumber = firstNumber.substring(0, 10);
      display.textContent = firstNumber;
    } else if (currentInput === "secondNumber") {
      secondNumber += displayNumbers(event);
      secondNumber = secondNumber.substring(0, 10);
      display.textContent = secondNumber;
    }
  } else if (
    event.target.classList.contains("operator") &&
    currentInput === "firstNumber"
  ) {
    operator = displayOperator(event);
    currentInput = "secondNumber";
  } else if (event.target.classList.contains("decimal")) {
    if (currentInput === "firstNumber" && !firstNumber.includes(".")) {
      firstNumber += ".";
      display.textContent = firstNumber;
    } else if (currentInput === "secondNumber" && !secondNumber.includes(".")) {
      secondNumber += ".";
      display.textContent = secondNumber;
    }
  } else if (event.target.classList.contains("backspace")) {
    if (currentInput === "firstNumber") {
      firstNumber = firstNumber.slice(0, -1);
      display.textContent = firstNumber;
    } else if (currentInput === "secondNumber") {
      secondNumber = secondNumber.slice(0, -1);
      display.textContent = secondNumber;
    }
  } else if (event.target.classList.contains("equals")) {
    let num1 = +firstNumber;
    let num2 = +secondNumber;
    //* Calculate the operation with the same number if the second number is not given
    if (secondNumber === "") {
      num2 = +firstNumber;
    }
    //* Equal button doesn't brake the program
    if (operator === "") {
      currentInput = "firstNumber";
      secondNumber = "";
      operator = "";
    } else if (num2 === 0 && operator === "/") {
      display.textContent = "ERROR";
      disableButtons();
    } else {
      let result = operate(num1, num2, operator);
      result = Math.round(result * 100) / 100;
      display.textContent = result;
      firstNumber = result;
      firstNumber = firstNumber.toString();
      secondNumber = "";
      operator = "";
      currentInput = "firstNumber";
    }
  } else if (event.target.classList.contains("clear")) {
    enableButtons();
    currentInput = "firstNumber";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "";
  }
}

function displayNumbers(event) {
  const numberSelected = event.target.value;
  return numberSelected;
}

function displayOperator(event) {
  const operatorSelected = event.target.value;
  return operatorSelected;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

function disableButtons() {
  number_button.disabled = true;
  operator_button.disabled = true;
  equals.disabled = true;
}

function enableButtons() {
  number_button.disabled = false;
  operator_button.disabled = false;
  equals.disabled = false;
}