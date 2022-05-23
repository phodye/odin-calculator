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
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) - parseInt(secondNumber);

}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) * parseInt(secondNumber);
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) / parseInt(secondNumber);
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
   checkDisplay();
   display.innerHTML += value;
 }

 //check display 
 function checkDisplay() {
    if (firstInput != '' && upperDisplay.innerHTML == '' && secondInput == '') {
       upperDisplay.innerHTML = display.innerHTML;
       display.innerHTML = '';
    }
 }

 //store value
 function storeValue() {
    if(firstInput != '' && secondInput != '') {
       return;
    } else if(display.innerHTML != '' && firstInput != '' && operand != '') {
       secondInput = display.innerHTML;
       return secondInput;
    } else if(display.innerHTML != '') {
      firstInput = display.innerHTML;
      upperDisplay.innerHTML = firstInput;
      display.innerHTML = '';
      return firstInput;
    }
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
   operand = '+';
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
})
 //subtraction
 const subtractionBtn = document.getElementById("subtraction");
 subtractionBtn.addEventListener("click", () => {

 })
 //multiplication
 const multiplicationBtn = document.getElementById("multiplication");
 multiplicationBtn.addEventListener("click", () => {
 
 })
 //division
 const divisionBtn = document.getElementById("division");
 divisionBtn.addEventListener("click", () => {
  
 })

 
 //equals function
 const equalsBtn = document.getElementById("equals");
 equalsBtn.addEventListener("click", () => {
 
})