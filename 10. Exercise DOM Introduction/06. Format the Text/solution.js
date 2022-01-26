function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');
  textArr = inputElement.value.split('.').filter(s => s !== '');

  while (textArr.length > 0) {
    let text = textArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    outputElement.appendChild(p);

  }
}