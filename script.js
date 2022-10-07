/* Global variables */

const bill = document.getElementById('bill');
const numberOfPeople = document.getElementById('number-of-people');
const tipAmount = document.querySelector('.tip-number span');
const totalPrice = document.querySelector('.total-number span');
const reset = document.querySelector('.reset button');
const fivePersentage = document.querySelector('.five');
const tenPersentage = document.querySelector('.ten');
const fifteenPersentage = document.querySelector('.fifteen');
const twentyFivePersentage = document.querySelector('.twentyfive');
const fiftyPersentage = document.querySelector('.fifty');
const costumePersentage = document.getElementById('costume');

/* Global variables */


/* When click buttons do some calculations */

fivePersentage.addEventListener('click', () => {
    let people = +numberOfPeople.value;
    let tip = 0.05 * bill.value / people;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    let total = (+bill.value + tip) / people;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
})

tenPersentage.addEventListener('click', () => {
    let people = +numberOfPeople.value;
    let tip = 0.10 * bill.value / people;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    let total = (+bill.value + tip) / people;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
})

fifteenPersentage.addEventListener('click', () => {
    let people = +numberOfPeople.value;
    let tip = 0.15 * bill.value / people;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    let total = (+bill.value + tip) / people;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
})

twentyFivePersentage.addEventListener('click', () => {
    let people = +numberOfPeople.value;
    let tip = 0.25 * bill.value / people;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    let total = (+bill.value + tip) / people;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
})

fiftyPersentage.addEventListener('click', () => {
    let people = +numberOfPeople.value;
    let tip = 0.50 * bill.value / people;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    let total = (+bill.value + tip) / people;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
})

costumePersentage.addEventListener('click', () => {
    let people = +numberOfPeople.value;
    let tip = (+costumePersentage.value / 100) * bill.value / people;
    tipAmount.innerHTML = `$${tip.toFixed(2)}`;
    let total = (+bill.value + tip) / people;
    totalPrice.innerHTML = `$${total.toFixed(2)}`;
})

/* When click buttons do some calculations */


/* When click reset button give all elements initial values */

reset.addEventListener('click', () => {
    tipAmount.innerHTML = '$0.00';
    totalPrice.innerHTML = '$0.00';
    bill.value = 0.0;
    numberOfPeople.value = 0;
    costumePersentage.value = 'Costume';
})

/* When click reset button give all elements initial values */