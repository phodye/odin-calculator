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
    let result = Number(firstNumber) + Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) - Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) * Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = Number(firstNumber) / Number(secondNumber);
    display.innerHTML = result;
    upperDisplay.innerHTML = '';
    firstInput = result;
    secondInput = '';
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

 //decimal
 const decimalButton = document.getElementById("decimal");
 decimalButton.addEventListener('click', () => {
   if(display.innerHTML.includes(".")){
      return
   } else {
   display.innerHTML += '.';
   }
 })

//backspace
const backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener('click', () => {
   let newDisplay = display.innerHTML.slice(0, -1);
   display.innerHTML = newDisplay;
})

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

 //operand button functions =====================================================================================
 //addition
 const additionBtn = document.getElementById("addition");
 additionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '+';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   operand = '+';
})
 //subtraction
 const subtractionBtn = document.getElementById("subtraction");
 subtractionBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '-';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   operand = '-';
 })
 //multiplication
 const multiplicationBtn = document.getElementById("multiplication");
 multiplicationBtn.addEventListener("click", () => {
   if (!operand) {
      operand = '*';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   }
   operand = '*';
 })
 //division
 const divisionBtn = document.getElementById("division");
 divisionBtn.addEventListener("click", () => {
   if(!operand) {operand = '/';
   }
   storeValue();
   if(firstInput != '' && secondInput != '') {
      switchCalculations();
   } 
   operand = '/';
 })

 
 //equals function
 const equalsBtn = document.getElementById("equals");
 equalsBtn.addEventListener("click", () => {
   if (!secondInput) {
      secondInput = display.innerHTML;
   }
   switchCalculations();
   firstInput = '';
   operand = '';
   secondInput = '';
})