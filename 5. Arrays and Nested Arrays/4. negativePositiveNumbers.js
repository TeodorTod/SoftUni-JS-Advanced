function solve(input) {
    let newArr = [];
    for (let el of input) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }
    console.log(newArr.join("\n"));

}
solve([7, -2, 8, 9]);