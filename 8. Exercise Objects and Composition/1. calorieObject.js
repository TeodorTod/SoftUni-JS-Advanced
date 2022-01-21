function solve(input) {
    let finalObj = {};

    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        let calories = Number(input[i + 1]);

        if (i % 2 === 0) {
            finalObj[item] = calories;
        }
    }
    console.log(finalObj);
}
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);