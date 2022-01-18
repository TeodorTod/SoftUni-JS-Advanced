function solve(input) {
    let firstSum = 0;
    let secondSum = 0;
    let copied = input.slice();

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(" ");
        firstSum += Number(input[i][i]);
    }

    for (let i = 0; i < input.length; i++) {
        secondSum += Number(input[i][input.length - i - 1]);
    }
    for (let i = 0; i < copied.length; i++) {
        copied[i] = copied[i].split(" ");
    }

    if (firstSum !== secondSum) {
        for (let el of input) {
            console.log(el.join(" "));
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            let row = input[i];
            row = row.map((a) => (a = firstSum));
            row[i] = copied[i][i];
            row[input.length - i - 1] = copied[i][input.length - i - 1];
            console.log(row.join(" "));
        }
    }
}
solve([
    "5 3 12 3 1",
    "11 4 23 2 5",
    "101 12 3 21 10",
    "1 4 5 2 2",
    "5 22 33 11 1",
]);