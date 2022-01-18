function solve(input) {
    let finalArr = [];
    let num = Number.MIN_SAFE_INTEGER;
    for (let el of input) {
        if (el >= num) {
            finalArr.push(el);
            num = el;
        }
    }
    return finalArr;
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));