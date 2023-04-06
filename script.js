const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        // console.log("number is pressed")
        // console.log(event.target.value)
        // updateScreen(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    // currentNumber = number
    // currentNumber += number
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}


const inputOperator = (operator) => {
    // prevNumber = currentNumber
    // calculationOperator = operator
    // currentNumber = ''
    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputOperator(event.target.value)
    })
})


const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()
    // console.log("equal button is pressed")
    updateScreen(currentNumber)
})


const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ""
}


const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", () => {
    clearAll()
    // console.log("AC button is pressed")
    updateScreen(currentNumber)
})


inputDecimal = (dot) => {
    // currentNumber += dot
    if(currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
