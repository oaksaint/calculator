'use strict';

// Declaration of variables collected from the DOM
let displayValue = document.querySelector('.display');
const digits = document.getElementsByClassName('digit-button');
const operators = document.getElementsByClassName('operator');
const clearButton = document.querySelector('.clear');

// Declarations of variables that will be used as temporary values
let firstValue;
let secondValue;
let chosenOperator;

// Declaration of basic operation functions
const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const multiply = function (number1, number2) {
  return number1 * number2;
};

const divide = function (number1, number2) {
  return number1 / number2;
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

// Assign the display value to either the first or second value variables
const getValue = function (value) {
  if (value === 'firstValue') {
    firstValue = displayValue.textContent;
  } else secondValue = displayValue.textContent;
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

// Calling the main functions of the application
showValue();
