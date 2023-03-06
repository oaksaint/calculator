'use strict';

// Declaration of variables collected from the DOM
let displayValue = document.querySelector('.display');
const digits = document.getElementsByClassName('digit-button');
const operators = document.getElementsByClassName('operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

// Declarations of variables that will be used as temporary values
let chosenNumbers = [];
let chosenOperators = [];
let total = 0;

// Message to be displayed when the user tries to divide by zero
const divideByZero = 'No divisions by zero allowed';

// Do the desired operation with the desired numbers and desired operators by running a loop on both, matching two numbers with an operator sandwiched in between, return divideByZero if the user tries to do exactly that
const operate = function () {
  total = chosenNumbers[0];
  for (let i = 0; i < chosenOperators.length; i++) {
    let operator = chosenOperators[i];
    let operand = chosenNumbers[i + 1];
    switch (operator) {
      case '+':
        total += operand;
        displayValue.textContent = total;
        break;
      case '-':
        total -= operand;
        displayValue.textContent = total;
        break;
      case '*':
        total *= operand;
        displayValue.textContent = total;
        break;
      case '/':
        if (operand === 0) {
          displayValue.textContent = divideByZero;
          break;
        }
        total /= operand;
        displayValue.textContent = total;
        break;
    }
  }
};

// Does not let the characters overflow the display panel, clear the panel if they surpass the max length of 24
const preventOverflow = function () {
  if (displayValue.textContent.length > 24) {
    displayValue.textContent = '';
  }
};

// Make the clicked numbers show up in the display panel
const clickNumbers = function () {
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function () {
      displayValue.textContent += digits[i].textContent;
      preventOverflow();
    });
  }
};

// Make the clicked operators show up in the display panel
const clickOperator = function () {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
      displayValue.textContent += operators[i].textContent;
      preventOverflow();
    });
  }
};

// When the equals button is clicked, populate the chosenNumbers and chosenOperators with their respective numbers and operators, converts the string numbers into pure numbers, then run the operate function to calculate everything, spit out the result by rounding to the first decimal number, or if the user tries to divide by zero print divideByZero and clear the display
const clickEquals = function () {
  equalsButton.addEventListener('click', function () {
    console.log(displayValue.textContent);
    chosenNumbers = displayValue.textContent.match(/\d+/g);
    chosenOperators = displayValue.textContent.match(/\D+/g);
    chosenNumbers = chosenNumbers.map((number) => parseInt(number, 10));
    operate();
    if (displayValue.textContent === divideByZero) {
      clearTimeout();
    } else {
      displayValue.textContent = Math.round(total * 10) / 10;
    }
  });
};

// Clears the display panel, and resets all variables
const clear = function () {
  clearButton.addEventListener('click', function () {
    displayValue.textContent = '';
    chosenNumbers = [];
    chosenOperators = [];
  });
};

// Sets a timer for 1.3 seconds, clears the display panel and resets all variables
const clearTimeout = function () {
  setTimeout(() => {
    displayValue.textContent = '';
    chosenNumbers = [];
    chosenOperators = [];
    total = 0;
  }, 1300);
};

// Calling the main functions of the application
clickNumbers();
clickOperator();
clickEquals();
clear();
