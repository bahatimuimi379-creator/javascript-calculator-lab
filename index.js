
const history = []


function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero"
    }
    return num1 / num2
}

function addToHistory(n1, n2, op, res) {
  
    const record = n1 + " " + op + " " + n2 + " = " + res
    history.push(record)
}
function calculate(operation) {
    const firstInput = document.getElementById('number1').value
    const secondInput = document.getElementById('number2').value

    const number1 = parseFloat(firstInput)
    const number2 = parseFloat(secondInput)

    if (firstInput === "" || secondInput === "") {
        document.getElementById('result').textContent = "Please enter both numbers"
        return
    }

    let result = 0
    let operatorSign = ""

    if (operation === 'add') {
        result = add(number1, number2)
        operatorSign = "+"
    } 
    else if (operation === 'subtract') {
        result = subtract(number1, number2)
        operatorSign = "-"
    } 
    else if (operation === 'multiply') {
        result = multiply(number1, number2)
        operatorSign = "*"
    } 
    else if (operation === 'divide') {
        result = divide(number1, number2)
        operatorSign = "/"
    }

    
    document.getElementById('result').textContent = result

  
    if (result !== "Cannot divide by zero") {
        addToHistory(number1, number2, operatorSign, result)
    }
}


function displayHistory() {
    const listContainer = document.getElementById('historyList')
    listContainer.innerHTML = "" // clear previous screen list

    if (history.length === 0) {
        listContainer.innerHTML = "<li>No calculations recorded yet</li>"
        return
    }

    for (let i = 0; i < history.length; i++) {
        const item = document.createElement('li')
        item.textContent = history[i]
        listContainer.appendChild(item)
    }
}

function clearHistory() {
    history.length = 0
    document.getElementById('historyList').innerHTML = "<li>History cleared</li>"
}
document.getElementById('addButton').addEventListener('click', function() {
    calculate('add')
})
document.getElementById('subtractButton').addEventListener('click', function() {
    calculate('subtract')
})
document.getElementById('multiplyButton').addEventListener('click', function() {
    calculate('multiply')
})
document.getElementById('divideButton').addEventListener('click', function() {
    calculate('divide')
})

document.getElementById('historyButton').addEventListener('click', displayHistory)
document.getElementById('clearButton').addEventListener('click', clearHistory)
