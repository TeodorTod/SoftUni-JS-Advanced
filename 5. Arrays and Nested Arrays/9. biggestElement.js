function solve(input) {
    let num = Number.MIN_SAFE_INTEGER;
    for (let column of input) {
        for (let el of column) {
            if (el > num) {
                num = el;
            }
        }
    }
    return num;
}
console.log(
    solve([
        [20, 50, 10],
        [8, 33, 145],
    ])
);