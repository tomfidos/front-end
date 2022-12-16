let nameInput = document.getElementById('nameInput');
let surnameInput = document.getElementById('surnameInput');
let phoneInput = document.getElementById('phoneInput');
let firstName = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');
let submit = document.querySelector('button');

submit.onclick = function() {
    firstName.textContent = nameInput.value;
    surname.textContent = surnameInput.value;
    phone.textContent = phoneInput.value; 
}
