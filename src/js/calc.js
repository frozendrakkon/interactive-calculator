const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equally = document.getElementById("equally");
const zeroing = document.getElementById("zeroing");
const bracketLeft = document.getElementById("bracketLeft")
const bracketRight = document.getElementById("bracketRight")

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

const display = document.getElementById("display");

function calc(nums, operators) {

    const showDisplayNums = nums.forEach((_, index) => {
        nums[index].onclick = function () {
            if (display.textContent == "0" || display.textContent == "+" || display.textContent == "-" || display.textContent == "*" || display.textContent == "/" || display.textContent == "=") {
                display.innerHTML = ""
            }
            display.innerHTML += nums[index].textContent
        }
    })

    const showDisplayOperator = operators.forEach((_, index) => {
        operators[index].onclick = function () {
            if (display.textContent == "0" || display.textContent == "+" || display.textContent == "-" || display.textContent == "*" || display.textContent == "/" || display.textContent == "=") {
                display.innerHTML = ""
            }
            display.innerHTML += operators[index].textContent
        }
    })

    const clearDisplay = zeroing.onclick = function () {
        display.innerHTML = "0"
    }

    function countEqually() {
        equally.onclick = function() {
            display.innerHTML = eval(display.textContent)
        }
    }
    countEqually()

}

calc([one, two, three, four, five, six, seven, eight, nine, zero],
    [addition, subtraction, multiplication, division, zeroing, bracketLeft, bracketRight])
