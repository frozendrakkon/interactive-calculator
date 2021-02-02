const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equally = document.getElementById("equally");
const zeroing = document.getElementById("zeroing");

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

function calculator() {

    result = 0

    function showNumsDisplay(...nums) {
        nums.forEach((_, index) => {
            nums[index].onclick = function () {
                // * удаляем ноль на дисплее
                if (display.textContent == "0" || display.textContent == "+" || display.textContent == "-" || display.textContent == "*" || display.textContent == "/" || display.textContent == "=") {
                    display.innerText = "";
                }
                let displayNum = display.innerText += nums[index].textContent;
                // * Сохраняем данные на дисплее в session storage
                sessionStorage.setItem("displayNum", displayNum)
            };
        });
    }
    showNumsDisplay(zero, one, two, three, four, five, six, seven, eight, nine);

    function showOperatorsDisplay(...operators) {
        operators.forEach((_, index) => {
            operators[index].onclick = function () {
                let displayOperator = display.innerText = operators[index].textContent;
                // * Сохраняем данные последнего оператора на дисплее в session storage
                sessionStorage.setItem("displayOperator", displayOperator)
            };
        });
    }
    showOperatorsDisplay(plus, minus, multiplication, division, equally)

    function displayClear() {
        zeroing.onclick = function() {
            display.innerText = "0";
            sessionStorage.setItem("displayNum", 0)
        }
    }
    displayClear();

    function countPlus() {
        plus.onclick = function () {
            let resultStr = sessionStorage.getItem("displayNum")
            display.innerHTML = +resultStr)
        }
    }
    countPlus()
}
calculator();