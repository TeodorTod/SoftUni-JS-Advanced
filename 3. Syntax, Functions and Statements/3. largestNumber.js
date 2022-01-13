function solve(n1, n2, n3) {
    let res;

    if (n1 > n2 && n1 > n3) {
        res = n1;
    } else if (n2 > n1 && n2 > n3) {
        res = n2;
    } else {
        res = n3;
    }
    console.log(`The largest number is ${res}.`);
}
solve(-3, -5, -22.5);