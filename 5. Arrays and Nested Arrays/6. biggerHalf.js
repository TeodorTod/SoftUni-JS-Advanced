function solve(input) {
    let sorted = input.sort((a, b) => a - b);
    let operator = Math.floor(input.length / 2);
    let finalArr = sorted.slice(operator, input.length);
    return finalArr;
}
solve([3, 19, 14, 7, 2, 19, 6]);