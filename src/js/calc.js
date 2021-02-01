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

    function showNumsDisplay(...nums) {
        nums.forEach((_, index) => {
            nums[index].onclick = function () {
                // * удаляем ноль на дисплее
                if (display.textContent == 0) {
                    display.innerText = "";
                }
                    let displayData = display.innerText += index;
                    // * Сохраняем данные на дисплее в session storage
                    sessionStorage.setItem("displayData", displayData)
            };
        });
    }
    showNumsDisplay( zero, one, two, three, four, five, six, seven, eight, nine);

    function showOperatorsDisplay() {
        
    }
    showOperatorsDisplay(plus, minus, multiplication, division, equally)

    function displayClear() {
        zeroing.onclick = () => (display.innerText = "0");
        sessionStorage.setItem("displayData", 0)
    }
    displayClear();

    function countPlus() {

    }

}
calculator();
