function solve(input) {
    let products = new Map();
    input.forEach(row => {
        let [town, product, priceText] = row.split(' | ');
        let price = Number(priceText);

        if (!products.get(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, price);
    });

    let result = [];

    for (const productWithPrice of products) {
        // let lowestPrice = [...productWithPrice[1]].sort((a, b) => a[1] - b[1])[0];
        const towns = [...productWithPrice[1]]; // spread into new area
        let lowestPrice = towns.sort((a, b) => a[1] - b[1])[0];
        // .sort((a, b) => a[1] - b[1])[0] => [0] will take the town at the first position after sorting for lowest price
        result.push(`${productWithPrice[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }

    console.log(result.join('\n'));
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);