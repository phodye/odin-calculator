// calculator functions =============================================================================

//adding 
const add = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) + parseInt(secondNumber);
    console.log(result);
    display.innerHTML = result;
}

//subtracting 
const subtract = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) - parseInt(secondNumber);
    display.innerHTML = result;
}

//multiplication
const multiply = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) * parseInt(secondNumber);
    display.innerHTML = result;
}

//division
const divide = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) / parseInt(secondNumber);
    display.innerHTML = result;
}

// number/display functions =============================================================================
//assign numbers
const upperDisplay = document.getElementById("upperDisplay");
const display = document.getElementById("display");
const numberBtns = document.querySelectorAll('.numberButton');
numberBtns.forEach( element => {
   element.addEventListener('click', storeValue);
 })

 function storeValue(e) {
   const value = e.target.value;
   display.innerHTML += value;
 }

 //clear numbers
 const clearBtn = document.getElementById("clear");
 clearBtn.addEventListener("click", () =>{
     display.innerHTML = '';
     upperDisplay.innerHTML = '';
 })

 //operand functions =============================================================================
 //addition
 const additionBtn = document.getElementById("addition");
 additionBtn.addEventListener("click", () => {
    if(display.innerHTML != '') {
        upperDisplay.innerHTML = display.innerHTML;
        display.innerHTML = '';
        operand = '+';
        return operand;
     } 
 })
 //subtraction
 const subtractionBtn = document.getElementById("subtraction");
 subtractionBtn.addEventListener("click", () => {
    if(display.innerHTML != '') {
        upperDisplay.innerHTML = display.innerHTML;
        display.innerHTML = '';
        operand = '-';
        return operand;
     } 
 })
 //multiplication
 const multiplicationBtn = document.getElementById("multiplication");
 multiplicationBtn.addEventListener("click", () => {
    if(display.innerHTML != '') {
        upperDisplay.innerHTML = display.innerHTML;
        display.innerHTML = '';
        operand = '*';
        return operand;
     } 
 })
 //division
 const divisionBtn = document.getElementById("division");
 divisionBtn.addEventListener("click", () => {
    if(display.innerHTML != '') {
        upperDisplay.innerHTML = display.innerHTML;
        display.innerHTML = '';
        operand = '/';
        return operand;
     } 
 })

 
 //equals function
 const equalsBtn = document.getElementById("equals");
 equalsBtn.addEventListener("click", () => {
     if(operand === '+') {
         add(upperDisplay.innerHTML, display.innerHTML)
         upperDisplay.innerHTML = '';
     } else if (operand === '-') {
        subtract(upperDisplay.innerHTML, display.innerHTML)
        upperDisplay.innerHTML = '';
     } else if (operand === '*') {
        multiply(upperDisplay.innerHTML, display.innerHTML)
        upperDisplay.innerHTML = '';
     } else if (operand === '/') {
        divide(upperDisplay.innerHTML, display.innerHTML)
        upperDisplay.innerHTML = '';
     }
})