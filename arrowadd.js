let num=(a,b)=>{
    let add=a+b;
    let sub=a-b;
    let mul=a*b;
    let div=a/b;
    return [add,sub,mul,div];
}

let num1=num(10,5);
console.log(num1);