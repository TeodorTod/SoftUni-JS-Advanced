function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    sorted.forEach((el, index) => {
        console.log(`${index + 1}.${el}`);
    });
}
solve(["John", "Bob", "Christina", "Ema"]);