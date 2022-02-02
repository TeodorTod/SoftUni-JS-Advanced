function solve(arr, str) {
    if (str == 'asc') {
        return arr.sort((a, b) => a - b);
    } else {
        return arr.sort((a, b) => b - a);
    }
}
solve([14, 7, 17, 6, 8], 'desc');