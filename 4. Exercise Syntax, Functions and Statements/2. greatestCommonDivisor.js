function solve(n1, n2) {
    if (n1 > n2) {
        for (let i = n1; i > 0; i--) {
            if (n1 % i === 0 && n2 % i === 0) {
                console.log(i);
                break;
            }
        }
    } else {
        for (let i = n2; i > 0; i--) {
            if (n1 % i === 0 && n2 % i === 0) {
                console.log(i);
                break;
            }
        }
    }
}
solve(2154, 458);