function solve(char1, char2, char3) {
    let sumLength = char1.length + char2.length + char3.length;
    let averageL = Math.round(sumLength / 3);

    console.log(sumLength);
    console.log(averageL);
}
solve('chocolate', 'ice cream', 'cake');