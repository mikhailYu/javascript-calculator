// button declarations
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let btnDivide = document.querySelector(".btnDivide");
let btnMultiply = document.querySelector(".btnMultiply");
let btnSubtract = document.querySelector(".btnSubtract");
let btnAdd = document.querySelector(".btnAdd");
let btnEquals = document.querySelector(".btnEquals");
let btnClear = document.querySelector(".btnClear");
let btnDEL = document.querySelector(".btnDEL");
let btnDecimal = document.querySelector(".btnDecimal");
let btnNegative = document.querySelector(".btnNegative");

let numDisplay = document.querySelector(".numDisplay");
let numDisplayText;
let displayValue = "0";

let firstValue = 0;
let secondValue = 0;

let isReset = false;
let isAdd = false;
let isSubtract = false;
let isMultiply = false;
let isDivide = false;




fullReset();

function fullReset(){
    resetDisplay();
    resetOperators();
    firstValue = 0;
    secondValue = 0;
    isReset = false;
    
};

function resetDisplay(){
    if (numDisplay.hasChildNodes()){
    numDisplay.removeChild(numDisplayText);
    };
    displayValue = "0";
    numDisplayText = document.createTextNode(parseFloat("0"));
    numDisplay.appendChild(numDisplayText);
    
};

function resetOperators(){
    isAdd = false;
    isSubtract = false;
    isMultiply = false;
    isDivide = false;
};


// operator functions

function operate(){
saveVal(2);
if(isAdd == true){
    displayValue = firstValue + +secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
} else if (isSubtract == true){
    displayValue = firstValue - secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
} else if (isMultiply== true){
    displayValue = firstValue * secondValue;
    updateDisplay();
    isReset = true;
    resetOperators();
} else if (isDivide == true){
    if(firstValue === 0 || secondValue === 0){
        dividedBy0();
    } else {
    displayValue = firstValue / secondValue;
    console.log ("answer divide = "+ displayValue);
    updateDisplay();
    isReset = true;
    resetOperators();
    }
}
};

function addDecimal(){
if (displayValue % 1 === 0){
    displayValue = displayValue.concat(".");
    updateDisplay();
}
};

function deleteDigit() {
    displayValue = displayValue.toString();
    if (displayValue.length == 1 && displayValue !== 0){
        displayValue = 0;
        updateDisplay();
    } else if (displayValue !== 0) {
    displayValue = displayValue.slice(0,-1);
    updateDisplay();
    };
};

function subtractOperator(){
    isReset= false;
    resetOperators();
    isSubtract = true;
    saveVal(1);
    resetDisplay();
    
};

function convertNegative(){
    displayValue = displayValue * -1;
    updateDisplay();
};

// button listeners

btn1.addEventListener("click", () => {
numInput(1);
});

btn2.addEventListener("click", () => {
numInput(2);
});

btn3.addEventListener("click", () => {
numInput(3);
});

btn4.addEventListener("click", () => {
numInput(4);
});

btn5.addEventListener("click", () => {
numInput(5);
});

btn6.addEventListener("click", () => {
numInput(6);
});

btn7.addEventListener("click", () => {
numInput(7);
});

btn8.addEventListener("click", () => {
numInput(8);
});

btn9.addEventListener("click", () => {
numInput(9);
});

btn0.addEventListener("click", () => {
numInput(0);
});

btnClear.addEventListener("click", fullReset);

btnEquals.addEventListener("click", () => {
    operate();
});


btnAdd.addEventListener("click", () => {
isReset= false;
resetOperators();
isAdd = true;
saveVal(1);
resetDisplay();
});

btnSubtract.addEventListener("click", () => {
subtractOperator();
});


btnMultiply.addEventListener("click", () => {
isReset= false;
resetOperators();
isMultiply = true;
saveVal(1);
resetDisplay();
});


btnDivide.addEventListener("click", () => {
isReset= false;
resetOperators();
isDivide = true;
saveVal(1);
resetDisplay();
});

btnDecimal.addEventListener("click", addDecimal);

btnDEL.addEventListener("click", deleteDigit);

btnNegative.addEventListener("click", convertNegative);

//keyboard support
document.addEventListener('keydown', (event) => {
if (event.code == "Digit0"){
    numInput(0);
} else if (event.code == "Digit1"){
    numInput(1);
} else if (event.code == "Digit2"){
    numInput(2); 
} else if (event.code == "Digit3"){
    numInput(3); 
} else if (event.code == "Digit4"){
    numInput(4); 
} else if (event.code == "Digit5"){
    numInput(5); 
} else if (event.code == "Digit6"){
    numInput(6); 
} else if (event.code == "Digit7"){
    numInput(7); 
} else if (event.code == "Digit8"){
    numInput(8); 
} else if (event.code == "Digit9"){
    numInput(9); 
} else if (event.code == "NumpadAdd"){
    isReset= false;
    resetOperators();
    isAdd = true;
    saveVal(1);
    resetDisplay();
} else if (event.code == "NumpadSubtract"){
    subtractOperator();
} else if (event.code == "NumpadMultiply"){
    isReset= false;
    resetOperators();
    isMultiply = true;
    saveVal(1);
    resetDisplay();
} else if (event.code == "NumpadDivide"){
    isReset= false;
    resetOperators();
    isDivide = true;
    saveVal(1);
    resetDisplay();
} else if (event.code == "Equal"){
    operate();
} else if (event.code == "Enter"){
    fullReset();
} else if (event.code == "Backspace"){
    deleteDigit();
} else if (event.code == "Period"){
    addDecimal();
};
});


// number display

function sliceLength(){
    displayValue = displayValue.toString();
    while (displayValue.length > 11){
        displayValue = displayValue.slice(0, -1);
        };
};

function numInput(inputMemory){
if (isReset == false){
displayValue = displayValue.toString();
displayValue = displayValue.concat(inputMemory);
updateDisplay();
} else {
    fullReset();
    displayValue = displayValue.concat(inputMemory);
    updateDisplay();
}
};

function updateDisplay(){
if (numDisplay.hasChildNodes()){
numDisplay.removeChild(numDisplayText);
};
sliceLength();
numDisplayText = document.createTextNode(parseFloat(displayValue));
numDisplay.appendChild(numDisplayText);
};

// memory storage
function saveVal(value){
    if(value == 1){
        firstValue = parseFloat(displayValue);
        console.log("first value = " + firstValue)
    } else if (value == 2){
        secondValue = parseFloat(displayValue);
        console.log("first value = " + firstValue);
        console.log("second value = " + secondValue)
    }
};

function dividedBy0 (){
    if (numDisplay.hasChildNodes()){
    numDisplay.removeChild(numDisplayText);
    }
    displayValue = "🙃";
    numDisplayText = document.createTextNode(displayValue);
    numDisplay.appendChild(numDisplayText)
};






