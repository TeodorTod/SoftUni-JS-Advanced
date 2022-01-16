function solve(input) {
    let res = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            res.push(input[i]);
        }
    }

    res = res
        .map((a) => a * 2)
        .reverse()
        .join(" ");

    console.log(res);
}
solve([3, 0, 10, 4, 7, 3]);