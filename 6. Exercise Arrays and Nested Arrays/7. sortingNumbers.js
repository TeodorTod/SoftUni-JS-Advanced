function solve(input) {
    let increasing = input.slice();
    increasing.sort((a, b) => a - b);
    let decreasing = input.slice();
    decreasing.sort((a, b) => b - a);

    let final = [];

    for (let i = 0; i < input.length / 2; i++) {
        final.push(increasing[i]);
        final.push(decreasing[i]);

    }
    if ((input.length) % 2 === 1) {
        final.pop();
    }

    return final;
}
console.log(solve([1, 65, 3]));