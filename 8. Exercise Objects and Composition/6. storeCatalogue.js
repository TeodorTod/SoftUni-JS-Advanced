function solve(input) {
    let products = {};
    let char = "";
    for (let line of input) {
        let [name, price] = line.split(" :");
        products[name] = price;
    }
    let sorted = Object.entries(products);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < sorted.length; i++) {
        let letter = sorted[i][0][0];
        let el = sorted[i][0];
        let price = sorted[i][1];
        if (char !== letter) {
            console.log(letter);
            console.log(`  ${el}:${price}`);
            char = letter;
        } else {
            console.log(`  ${el}:${price}`);
        }
    }
}
solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);