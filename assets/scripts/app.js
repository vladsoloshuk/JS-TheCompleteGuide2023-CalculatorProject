const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteInput(operator, resultBeforCalc, calcNumber) {
    const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult    
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') { 
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE' && enteredNumber != 0) {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteInput(mathOperator, initalResult, enteredNumber);
    writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

/*function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}*/

addBtn.addEventListener('click', calculateResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this, 'DIVIDE'));