
// Store all calculations
const history = [];

// Add a calculation to the history
function addToHistory(operand1, operand2, operator, result) {
    history.push({
        operand1: operand1,
        operand2: operand2,
        operator: operator,
        result: result
    });
}

// Addition
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
}

// Subtraction
function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}

// Multiplication
function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }

    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}

// Get the numbers entered by the user
function getNumbers() {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);

    return {
        number1: number1,
        number2: number2
    };
}

// Display the result
function showResult(result) {
    document.getElementById("result").textContent = result;
}

// Display calculation history
function displayHistory() {
    const historyList = document.getElementById("historyList");

    // Clear the current history display
    historyList.innerHTML = "";

    // Check if there are no calculations
    if (history.length === 0) {
        const message = document.createElement("li");
        message.textContent = "You have no stored calculations.";
        historyList.appendChild(message);
        return;
    }

    // Display each calculation
    for (const calculation of history) {
        const historyItem = document.createElement("li");

        historyItem.textContent =
            `${calculation.operand1} ${calculation.operator} ` +
            `${calculation.operand2} = ${calculation.result}`;

        historyList.appendChild(historyItem);
    }
}

// Clear calculation history
function clearHistory() {
    history.length = 0;

    document.getElementById("historyList").innerHTML = "";

    showResult("History cleared.");
}

// Add button
document.getElementById("addButton").addEventListener("click", function () {
    const numbers = getNumbers();
    const result = add(numbers.number1, numbers.number2);

    showResult(result);
});

// Subtract button
document.getElementById("subtractButton").addEventListener("click", function () {
    const numbers = getNumbers();
    const result = subtract(numbers.number1, numbers.number2);

    showResult(result);
});

// Multiply button
document.getElementById("multiplyButton").addEventListener("click", function () {
    const numbers = getNumbers();
    const result = multiply(numbers.number1, numbers.number2);

    showResult(result);
});

// Divide button
document.getElementById("divideButton").addEventListener("click", function () {
    const numbers = getNumbers();
    const result = divide(numbers.number1, numbers.number2);

    showResult(result);
});

// Show history button
document.getElementById("historyButton").addEventListener("click", displayHistory);

// Clear history button
document.getElementById("clearButton").addEventListener("click", clearHistory);



