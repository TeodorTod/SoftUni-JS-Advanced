function solve(num) {
    let sum = 0;
    num =  num.toString();
    let isEqual = true;

    for (let i = 0; i < num.length; i++) {
       let num1 = num[0];
       let num2 = num[i];
       if (num1 !== num2) {
           isEqual = false;
       }
       sum += Number(num[i]);
    }

    if (isEqual) {
        console.log("true");
    } else {
        console.log("false");
    }

    console.log(sum);
}
solve(1234);