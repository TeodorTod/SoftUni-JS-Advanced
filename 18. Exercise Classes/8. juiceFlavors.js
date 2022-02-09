function solve(input) {
    let finalObj = {};
    let bootles = {};
    let trick = {};
    let quantity = 0;

    for (let el of input) {
        let [type, quantity] = el.split(" => ");
        quantity = Number(quantity);
        if (finalObj.hasOwnProperty(type)) {
            finalObj[type] += quantity;
        } else {
            finalObj[type] = quantity;
        }
        if (quantity > 1000) {
            trick[type] = 0;
        }
    }

    for (let el in finalObj) {
        if (finalObj[el] > 1000) {
            quantity = Math.floor(finalObj[el] / 1000);
            trick[el] = quantity;
        }
    }
    for (const [key, value] of Object.entries(trick)) {
        console.log(`${key} => ${value}`);
    }
}
solve([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
]);