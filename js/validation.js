// Отримуємо посилання на вхідне поле та кнопку
let input = document.getElementById('myInput');
let button = document.getElementById('myButton');



input.addEventListener('input', function() {
    
    if (this.value.trim() !== '') {
        button.removeAttribute('disabled');
    } 
    else {
        button.setAttribute('disabled', true);
    }
});
