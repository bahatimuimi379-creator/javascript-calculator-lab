````markdown
# JavaScript Calculator

## Project Description

This project is a simple JavaScript calculator that performs four basic arithmetic operations:

- Addition
- Subtraction
- Multiplication
- Division

The calculator also keeps track of previous calculations using a history array and allows the user to display or clear the calculation history.

## Project Structure

The project contains three main files:

```text
javascript-calculator/
│
├── index.html
├── index.js
└── README.md
````

### index.html

The `index.html` file provides the structure and user interface of the calculator.

It contains:

* Input fields for two numbers
* Buttons for the four arithmetic operations
* A section for displaying the calculation result
* A button for displaying calculation history
* A button for clearing calculation history

The HTML file is connected to the JavaScript file using:

```html
<script src="index.js"></script>
```

### index.js

The `index.js` file contains the functionality of the calculator.

It includes the following functions:

* `add()` - Adds two numbers.
* `subtract()` - Subtracts the second number from the first number.
* `multiply()` - Multiplies two numbers.
* `divide()` - Divides the first number by the second number.
* `addToHistory()` - Stores calculations in the history array.
* `calculate()` - Determines which operation the user selected.
* `displayHistory()` - Displays all stored calculations.
* `clearHistory()` - Removes all stored calculations.

## History Tracking

An empty array is created to store the calculation history:

```javascript
const history = [];
```

Each calculation is stored as an object containing:

* The first operand
* The second operand
* The operator
* The result

For example:

```javascript
{
    operand1: 10,
    operand2: 5,
    operator: "+",
    result: 15
}
```

## How to Run the Project

1. Open the project folder.
2. Make sure `index.html`, `index.js`, and `README.md` are in the same folder.
3. Open `index.html in a web browser.
4. Enter the first number.
5. Enter the second number.
6. Select an arithmetic operation.
7. The result will be displayed.
8. Click "Show History" to see previous calculations.

## Testing

The calculator should be tested using different numbers and operations.

### Addition

```text
10 + 5 = 15
```

### Subtraction

```text
10 - 5 = 5
```

### Multiplication

```text
10 * 5 = 50
```

### Division

```text
10 / 5 = 2
```

### Division by Zero

When attempting:

```text
10 / 0
```

The calculator should display:

```text
Error: Cannot divide by zero.
```

## Expected History

After performing the four calculations above, the history should contain:

text
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2


## Technologies Used

* HTML5
* JavaScript
* Git/GitHub for version control

## Version Control

Git can be used to track changes to the project.

Initialize Git:

bash
git init


Add the project files:

bash
git add .


Create the first commit:
bash
git commit -m "Create JavaScript calculator"


Further changes can be tracked using:
bash
git add .
git commit -m "Update calculator functionality"


## Conclusion

This project demonstrates the use of JavaScript functions, variables, arrays, objects, conditional statements, loops, DOM manipulation, and event handling to create a functional calculator with calculation history.


