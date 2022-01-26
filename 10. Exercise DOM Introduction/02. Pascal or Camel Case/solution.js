function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let res = "";

  if (currentCase === "Camel Case") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        res += input[i + 1].toUpperCase();
        i++;
      } else {
        res += input[i].toLowerCase();
      }
    }
  } else if (currentCase === "Pascal Case") {
    res += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] === " ") {
        res += input[i + 1].toUpperCase();
        i++;
      } else {
        res += input[i].toLowerCase();
      }
    }
  } else {
    res = "Error!";
  }

  let result = document.getElementById("result");
  result.textContent = res;
}