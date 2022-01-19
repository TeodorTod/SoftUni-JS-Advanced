function solve(input) {
    let finalObj = {};
    for (let el of input) {
        let [city, population] = el.split(" <-> ");
        population = Number(population);

        if (!finalObj[city]) {
            finalObj[city] = population;
        } else {
            finalObj[city] += population;
        }
    }
    let final = Object.keys(finalObj).forEach(a => {
        console.log(`${a} : ${finalObj[a]}`);
    });
}
solve(['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]

);