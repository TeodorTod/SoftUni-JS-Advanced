function solve(...args) {
    let data = {};
    args.forEach(x => {
        let type = typeof x;
         console.log(`${typeof(x)}: ${x}`);
        if (!data[type]) {
            data[type] = 0;
        } 
            data[type]++;
        
    });
  
    Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .forEach(key => console.log(`${key} = ${data[key]}`) 
        );
    
}
solve('cat', 42, function () { console.log('Hello world!'); }, 1);