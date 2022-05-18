//switch function for main operations ===============================================================
function switchCalculations() {
   console.log(operand);
   switch (operand) {
      case "+":

         break;
      case "-":

         break;
      case "*":
            
         break;
      case "/":

         break;
    }
}





// calculator functions =============================================================================

//adding 
const add = function(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) + parseInt(secondNumber);
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

 //operand functions =====================================================================================
 //addition
 const additionBtn = document.getElementById("addition");
 additionBtn.addEventListener("click", () => {

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