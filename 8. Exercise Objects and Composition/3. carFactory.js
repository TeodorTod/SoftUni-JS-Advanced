function solve(input) {
    let finalObj = {};
    finalObj.model = input.model;

    if (input["power"] <= 90) {
        finalObj["engine"] = {
            ["power"]: 90,
            ["volume"]: 1800,
        };
    } else if (input["power"] <= 120) {
        finalObj["engine"] = {
            ["power"]: 120,
            ["volume"]: 2400,
        };
    } else if (input["power"] > 120) {
        finalObj["engine"] = {
            ["power"]: 200,
            ["volume"]: 3500,
        };
    }

    if (input["carriage"] === "hatchback") {
        finalObj["carriage"] = {
            ["type"]: input.carriage,
            ["color"]: input.color,
        };
    } else {
        finalObj["carriage"] = {
            ["type"]: input.carriage,
            ["color"]: input.color,
        };
    }

    if (input["wheelsize"] % 2 === 1) {
        finalObj["wheels"] = [
            input.wheelsize,
            input.wheelsize,
            input.wheelsize,
            input.wheelsize,
        ];
    } else {
        finalObj["wheels"] = [
            input.wheelsize - 1,
            input.wheelsize - 1,
            input.wheelsize - 1,
            input.wheelsize - 1,
        ];
    }

    return finalObj;
}
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});