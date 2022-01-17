function solve(arr, num) {
    let finalArr = [];
    for (let i = 0; i < arr.length; i+=num) {
        finalArr.push(arr[i]);
        
    }
    return finalArr;
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);