// JavaScript Program to find the factorial of a number\

// let num= parseInt(prompt("Enter number"));
let num =5;
function factorial(x){
    if(x == 0) return 1;
    else{
        return x * factorial(x-1);
    }
}



if(num >= 0){
    const result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);
}
else console.log(`Enter Positive Number`);