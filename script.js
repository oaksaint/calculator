'use strict';

// Declaration of variables collected from the DOM
let displayValue = document.querySelector('.display');
const digits = document.getElementsByClassName('digit-button');
const operators = document.getElementsByClassName('operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

// Declarations of variables that will be used as temporary values
let previousValue;
let nextValue;
let chosenOperator;
let total = 0;
let hiddenDisplayValue;

// Declaration of basic operation functions
const add = function (number1, number2) {
  return Number(number1) + Number(number2);
};

const subtract = function (number1, number2) {
  return Number(number1) - Number(number2);
};

const multiply = function (number1, number2) {
  return Number(number1) * Number(number2);
};

const divide = function (number1, number2) {
  return Number(number1) / Number(number2);
};

// Declaration of the equals function
const operate = function (operator, number1, number2) {
  if (operator === '+') {
    return add(number1, number2);
  } else if (operator === '-') {
    return subtract(number1, number2);
  } else if (operator === '*') {
    return multiply(number1, number2);
  } else if (operator === '/') {
    return divide(number1, number2);
  }
};

// Make the clicked numbers show up in the display panel
const showValue = function () {
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function () {
      displayValue.textContent += digits[i].textContent;
      // Does not let the numbers overflow the display panel, clear the panel if they surpass the max length of 12
      if (displayValue.textContent.length > 12) {
        displayValue.textContent = '';
      }
    });
  }
};

// Logs the clicked operator in a variable, logs the previousNumber variable using the display panel data, clears the display panel
const clickOperator = function () {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
      chosenOperator = operators[i].textContent;
      previousValue = displayValue.textContent;
      displayValue.textContent = '';
    });
  }
};

const clickEquals = function () {
  equalsButton.addEventListener('click', function () {
    nextValue = displayValue.textContent;
    total = operate(chosenOperator, previousValue, nextValue);
    displayValue.textContent = total;
  });
};

// Clears the display panel, and resets all variables.
const clear = function () {
  clearButton.addEventListener('click', function () {
    displayValue.textContent = '';
    previousValue = 0;
    nextValue = 0;
    chosenOperator = '';
    total = 0;
  });
};

// Calling the main functions of the application
showValue();
clickOperator();
clickEquals();
clear();
