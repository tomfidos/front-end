let paragraph = document.getElementById('tekst');
let addButton = document.getElementById('dodaj');
let removeButton = document.getElementById('usun');
let text = 'Jakiś tekst.'

addButton.onclick = function() {
    paragraph.textContent = text;
}

removeButton.onclick = function() {
    paragraph.textContent = '';
}
