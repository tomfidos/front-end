let jsAdmiration = 'Uwielbiam JavaScript';
let selfConfidence = 'Jestem świetnym programistą';

function getLongerString(firstString, secondString) {
    if (firstString.length > secondString.length) {
        return firstString;
    } else if (firstString.length < secondString.length) {
        return secondString;
    }
}

console.log(getLongerString(jsAdmiration, selfConfidence));
