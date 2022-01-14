function solve(num, op1, op2, op3, op4, op5) {
    num = Number(num);

    switch(op1) {
        case "chop": num = num / 2; console.log(num); break;
        case "dice": num = Math.sqrt(num); console.log(num); break;
        case "spice": num = num + 1; console.log(num); break;
        case "bake": num = num * 3; console.log(num); break;
        case "fillet": num = num * 0.8; console.log(num); break;
    }
    switch(op2) {
        case "chop": num = num / 2; console.log(num); break;
        case "dice": num = Math.sqrt(num); console.log(num); break;
        case "spice": num = num + 1; console.log(num); break;
        case "bake": num = num * 3; console.log(num); break;
        case "fillet": num = num * 0.8; console.log(num); break;
    }
    switch(op3) {
        case "chop": num = num / 2; console.log(num); break;
        case "dice": num = Math.sqrt(num); console.log(num); break;
        case "spice": num = num + 1; console.log(num); break;
        case "bake": num = num * 3; console.log(num); break;
        case "fillet": num = num * 0.8; console.log(num); break;
    }
    switch(op4) {
        case "chop": num = num / 2; console.log(num); break;
        case "dice": num = Math.sqrt(num); console.log(num); break;
        case "spice": num = num + 1; console.log(num); break;
        case "bake": num = num * 3; console.log(num); break;
        case "fillet": num = num * 0.8; console.log(num); break;
    }
    switch(op5) {
        case "chop": num = num / 2; console.log(num); break;
        case "dice": num = Math.sqrt(num); console.log(num); break;
        case "spice": num = num + 1; console.log(num); break;
        case "bake": num = num * 3; console.log(num); break;
        case "fillet": num = num * 0.8; console.log(num); break;
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');