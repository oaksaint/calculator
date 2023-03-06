'use strict';

// Declaration of variables collected from the DOM
let displayValue = document.querySelector('.display');
const digits = document.getElementsByClassName('digit-button');
const operators = document.getElementsByClassName('operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

// Declarations of variables that will be used as temporary values
let total;
let currentValue;
let chosenOperator;

// Do the desired operation with the desired numbers, by using the operator and the total and currentNumber variables
const operate = function (operator, number1, number2) {
  if (operator === '+') {
    return Number(number1) + Number(number2);
  } else if (operator === '-') {
    return Number(number1) - Number(number2);
  } else if (operator === '*') {
    return Number(number1) * Number(number2);
  } else if (operator === '/') {
    // Returns a cheeky message if the user tries to divide by zero
    if (Number(number2) === 0) {
      return 'NOT BY ZERO';
    }
    return Math.round((Number(number1) / Number(number2)) * 10) / 10;
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

// Logs the clicked operator in a variable, logs the currentValue variable using the display panel data, clears the display panel
const clickOperator = function () {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
      chosenOperator = operators[i].textContent;
      total = displayValue.textContent;
      displayValue.textContent = '';
    });
  }
};

// When the equals button is clicked, run the operate function and assign it to the "total" variable
const clickEquals = function () {
  equalsButton.addEventListener('click', function () {
    currentValue = displayValue.textContent;
    total = operate(chosenOperator, total, currentValue);
    displayValue.textContent = total;
    // If the display value from the total overflows the screen, a message saying TOO BIG will be shown instead, and the display will be cleared in 1 second
    if (displayValue.textContent.length > 12) {
      displayValue.textContent = 'TOO BIG!';
      clearTimeout();
      // Display NOT BY ZERO from the return of a division by zero, and clear the display after 1 second
    } else if (displayValue.textContent === 'NOT BY ZERO') {
      clearTimeout();
      // Display the result from the total normally
    } else {
      displayValue.textContent = total;
    }
  });
};

// Clears the display panel, and resets all variables
const clear = function () {
  clearButton.addEventListener('click', function () {
    displayValue.textContent = '';
    total = 0;
    currentValue = 0;
    chosenOperator = '';
  });
};

// Sets a timer for 1 second and resets all variables
const clearTimeout = function () {
  setTimeout(() => {
    displayValue.textContent = '';
    total = 0;
    currentValue = 0;
    chosenOperator = '';
  }, 1000);
};

// Calling the main functions of the application
showValue();
clickOperator();
clickEquals();
clear();
