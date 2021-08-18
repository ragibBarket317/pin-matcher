function randomPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return randomPin();
    }
}
function generatePin() {
    const getPin = randomPin();
    const setPinNumber = document.getElementById('display-pin');
    setPinNumber.value = getPin;
}
document.getElementById('display-number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display');
    if (isNaN(number)) {
        if (number == 'C') {
            displayNumber.value = '';
        }
        if (number == '<') {
            // screenView.value = screenView.value.slice(0, - 1);
            displayNumber.value = displayNumber.value.slice(0, -1);
        }
    }
    else {
        const previousNumber = displayNumber.value;
        const currentNumber = previousNumber + number;
        displayNumber.value = currentNumber;
    }
});
function submitButton() {
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('display').value;
    const varifySuccess = document.getElementById('varify-success');
    const varifyFail = document.getElementById('varify-fail');
    if (pin == typeNumber) {
        varifySuccess.style.display = 'block';
        varifyFail.style.display = 'none';
    }
    else {
        varifyFail.style.display = 'block';
        varifySuccess.style.display = 'none';
    }
}
