let n=5;
for(let i=0; i<n; i++){
    console.log("hello",i);
}
console.log("Bye!!");
console.log(process);

let args=process.argv;
for(let i=2; i<args.length; i++){
    console.log("Hello to", args[i]);
}

// MODULE.EXPORTS

