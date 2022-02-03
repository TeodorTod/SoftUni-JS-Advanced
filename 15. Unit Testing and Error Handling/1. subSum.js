function solve(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
   let startIn = Math.max(start, 0);
   let endIn = Math.min(end, arr.length - 1);
    
    let subNumbers = arr.slice(startIn, endIn + 1);
    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    return sum;
}
console.log(solve([10, 'twenty', 30, 40], 0, 2, 3, 300));