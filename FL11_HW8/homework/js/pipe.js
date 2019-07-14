function pipe(x, ...args) {
    for(let i = 0;i < args.length;i++){  
        x = args[i](x);
    }
    return x;
}

function addOne(x) {
    return x + 1;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));