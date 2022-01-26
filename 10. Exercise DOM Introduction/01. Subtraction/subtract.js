function subtract() {
    let firtsNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firtsNumber = Number(firtsNumber);
    secondNumber = Number(secondNumber);
    let exersiceResult = document.getElementById('result');
    exersiceResult.textContent = firtsNumber - secondNumber;

}