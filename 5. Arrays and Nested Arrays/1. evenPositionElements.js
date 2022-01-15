function solve(input) {
    let res = [];
    for (let i = 0; i < input.length; i+=2) {
      res.push(input[i]);
    }
    console.log(res.join(" "));
}
solve(['20', '30', '40', '50', '60']);