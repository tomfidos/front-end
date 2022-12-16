let firstNum = -8;
let secondNum = 8;

function informAboutMathematics(x, y) {
    let sum = x + y;
    let subtractionXy = x - y;
    let subtractionYx = y - x;
    let multiplication = x * y;
    
    if (sum >= 0) {
        console.log('Wynik dodawania wynosi ' + sum);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
    if (subtractionXy >= 0) {
        console.log('Wynik odjęcia y od x wynosi ' + subtractionXy);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
    if (subtractionYx >= 0) {
        console.log('Wynik odjęcia x od y wynosi ' + subtractionYx);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
    if (multiplication >= 0) {
        console.log('Wynik mnożenia wynosi ' + multiplication);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
}

informAboutMathematics(firstNum, secondNum);
