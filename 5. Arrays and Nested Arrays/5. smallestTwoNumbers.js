function solve(input) {
    let sorted = input.sort((a, b) => a - b);
    console.log(sorted[0], sorted[1]);
}
solve([30, 15, 50, 5]);