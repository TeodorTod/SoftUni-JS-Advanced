function solve(input) {
    let res = [];

    for (let el of input) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        res.push({
            name,
            level,
            items
        });
    }
    let final = JSON.stringify(res);
    console.log(final);
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);