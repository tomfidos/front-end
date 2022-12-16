let firstNumber = 20;
let secondNumber = 7;

function getTrueIfConditionMet(m, n) {
    if (m === 20 || n === 20 || m + n <= 20) {
        return true;
    }
}

console.log(getTrueIfConditionMet(firstNumber, secondNumber));
