let num1 = 2;
let num2 = 5;

function getHigher(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum;
    } else if (firstNum < secondNum) {
        return secondNum;
    }
}

console.log(getHigher(num1, num2));
