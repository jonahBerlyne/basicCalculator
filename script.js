let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.getElementById('clearBtn');
const lastDisplay = document.getElementById('lastDisplay');
const spaceBetween = document.getElementById('space-between');
const currentDisplay = document.getElementById('currentDisplay');

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

function clear() {
  lastDisplay.textContent = "";
  currentDisplay.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

numberButtons.forEach((button) => 
 button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
 button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (currentDisplay.textContent === '0' || shouldResetScreen) {
    resetScreen();
  }
 currentDisplay.textContent += number;
}

function resetScreen() {
  currentDisplay.textContent = '';
  shouldResetScreen = false;
}

function setOperation(operator) {
 if (currentOperation !== null) evaluate();
 firstOperand = currentDisplay.textContent;
 currentOperation = operator;
 lastDisplay.textContent = `${firstOperand}${currentOperation}`; 
 currentDisplay.textContent = "";
 shouldResetScreen = true;
}

function evaluate() {
 if (currentOperation === null || shouldResetScreen) return;
 if (currentOperation === '/' && currentDisplay.textContent === '0') {
  alert("Error");
  return;
 }
 secondOperand = currentDisplay.textContent;
 lastDisplay.textContent = "";
 currentDisplay.textContent = operate(firstOperand, currentOperation, secondOperand);
 // Ends the equation:
 currentOperation = null;
};

const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
  return (a - b);
};

const multiply = function(a, b) {
  return (a * b);
};

const divide = function(a, b) {
  return (a / b);
};

const operate = function(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
};