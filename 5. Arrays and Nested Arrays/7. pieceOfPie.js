function solve(arr, target1, target2) {
    let first = arr.indexOf(target1);
    let last = arr.indexOf(target2);
    let finalArr = arr.slice(first, last + 1);

    return finalArr;
}
solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);