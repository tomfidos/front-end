let n = 185;
let lowerBand = 100;
let higherBand = 200;

function checkIfNumberInRange(number) {
    if (number > lowerBand && number < higherBand) {
        console.log('Liczba znajduje się w przedziale');
    } else {
        console.log('Liczba nie znajduje się w przedziale');
    }
}

checkIfNumberInRange(n);
