function solve(input) {
    let finalArr = [];
    for (let i = 1; i <= input.length; i++) {
        if (input[i - 1] === "add") {
            finalArr.push(i);
        } else {
            finalArr.pop();
        }

    }
    if (finalArr.length < 1) {
        console.log("Empty");
    } else {
        console.log(finalArr.join("\n"));
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add'
]);