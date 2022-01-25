function calc() {
    let first = document.getElementById('num1');
    let second = document.getElementById('num2');
    let sumNums = document.getElementById('sum');
    let firstNum = Number(first.value);
    let secondNum = Number(second.value);
    let sum = firstNum + secondNum;
    sumNums.value = sum;
}
