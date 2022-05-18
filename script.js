//switch function for main operations ===============================================================
function switchCalculations() {
   console.log(operand);
   switch (operand) {
      case "+":
            add(firstInput, secondInput);
         break;
      case "-":
            subtract(firstInput, secondInput);
         break;
      case "*":
            multiply(firstInput, secondInput);
         break;
      case "/":
            divide(firstInput, secondInput);
         break;
    }
}

// calculator functions =============================================================================

//adding 
const add = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) + parseInt(secondNumber);
    product = result;
    display.innerHTML = product;
    upperDisplay.innerHTML = '';
    firstInput = '';
    secondInput = '';
    storeValue();
}

//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) - parseInt(secondNumber);
    product = result;
    display.innerHTML = product;
    upperDisplay.innerHTML = '';
    firstInput = '';
    secondInput = '';
    storeValue();
}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) * parseInt(secondNumber);
    product = result;
    display.innerHTML = product;
    upperDisplay.innerHTML = '';
    firstInput = '';
    secondInput = '';
    storeValue();
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) / parseInt(secondNumber);
    product = result;
    display.innerHTML = product;
    upperDisplay.innerHTML = '';
    firstInput = '';
    secondInput = '';
    storeValue();
}

// number/display functions =============================================================================
//variables
const upperDisplay = document.getElementById("upperDisplay");
const display = document.getElementById("display");
let firstInput = '';
let secondInput = '';
let product = '';
let operand = '';

//display numbers
const numberBtns = document.querySelectorAll('.numberButton');
numberBtns.forEach( element => {
   element.addEventListener('click', assignValue);
 })

 function assignValue(e) {
   const value = e.target.value;
   display.innerHTML += value;
 }

 //store value
function storeValue() {
   if(display.innerHTML != '' && upperDisplay.innerHTML == '') {
      firstInput = display.innerHTML;
      display.innerHTML = '';
      upperDisplay.innerHTML = firstInput;
      console.log(firstInput);
      return firstInput;
   } else if (display.innerHTML != '' && upperDisplay.innerHTML != '') {
      secondInput = display.innerHTML;
      console.log(secondInput);
      return secondInput;
   }
}

function prepareForNext() {
   
}

 //clear numbers
 const clearBtn = document.getElementById("clear");
 clearBtn.addEventListener("click", () =>{
     display.innerHTML = '';
     upperDisplay.innerHTML = '';
     firstInput = '';
     secondInput = '';
     product = '';
     operand = '';
 })

 //operand functions =====================================================================================
 //addition
 const additionBtn = document.getElementById("addition");
 additionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '+';
      } 
   storeValue();
   if (!secondInput) {
      return;
   } else if (firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   if (operand != '+') {
      operand = '+';
   }
})
 //subtraction
 const subtractionBtn = document.getElementById("subtraction");
 subtractionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '-';
      } 
   storeValue();
   if (!secondInput) {
      return;
   } else if (firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   if (operand != '-') {
      operand = '-';
   }
 })
 //multiplication
 const multiplicationBtn = document.getElementById("multiplication");
 multiplicationBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '*';
      }
   storeValue();
   if (!secondInput) {
      return;
   } else if (firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   if (operand != '*') {
      operand = '*';
   }
 })
 //division
 const divisionBtn = document.getElementById("division");
 divisionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '/';
      }
   storeValue();
   if (!secondInput) {
      return;
   } else if (firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   if (operand != '/') {
      operand = '/';
   }
 })

 
 //equals function
 const equalsBtn = document.getElementById("equals");
 equalsBtn.addEventListener("click", () => {
    if (!secondInput) {
       secondInput = display.innerHTML;
    }
   switchCalculations();
   operand = '';
})