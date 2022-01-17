function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(" "));
}
solve(["Banana", "Orange", "Coconut", "Apple"], 15);