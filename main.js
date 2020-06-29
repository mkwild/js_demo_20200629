const mainElement = document.querySelector("body")
const calcVisual = document.createElement("div")
calcVisual.className = "background"
mainElement.append(calcVisual)
const outputVisual = document.createElement("div")
outputVisual.className = "outputBox"
const input1 = document.createElement("input")
input1.className = "input"
input1.type = "number"
input1.placeholder = "num"
const input2 = document.createElement("input")
input2.className = "input"
input2.type = "number"
input2.placeholder = "num"
calcVisual.append(input1)
calcVisual.append(input2)
const addButton = document.createElement("button")
addButton.append("+")
const multButton = document.createElement("button")
multButton.append("*")
const subButton = document.createElement("button")
subButton.append("-")
const divButton = document.createElement("button")
divButton.append("/")
calcVisual.append(addButton)
calcVisual.append(multButton)
calcVisual.append(subButton)
calcVisual.append(divButton)
calcVisual.append(outputVisual)

// Create buttons on the page for Add, Multiply, and Divide, 
// and write a click event listener for each button, which calls the calculator
// with the correct x and y values and the correct callback function
// You will need two textboxes: one for x, and one for y.

const add = (x, y) => x + y

const multiply = (x, y) => x*y

const subtract = (x, y) => x - y

const divide = (x, y) => x / y

function calculator (x, y, operator) {
    return operator(x, y)
}

addButton.addEventListener("click", function () {
    outputVisual.innerText = calculator((input1.value*1), (input2.value*1), add)
})

multButton.addEventListener("click", function () {
    outputVisual.innerText = calculator((input1.value*1), (input2.value*1), multiply)
})

subButton.addEventListener("click", function () {
    outputVisual.innerText = calculator((input1.value*1), (input2.value*1), subtract)
})

divButton.addEventListener("click", function () {
    outputVisual.innerText = calculator((input1.value*1), (input2.value*1), divide)
})