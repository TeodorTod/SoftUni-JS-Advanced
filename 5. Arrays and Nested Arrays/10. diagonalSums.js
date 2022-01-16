function solve(input) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < input.length; i++) {
        first += input[i][i];
        second += input[i][input.length - i - 1];
    }
    console.log(first, second);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );