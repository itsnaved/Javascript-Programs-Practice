// JavaScript program to display Fibonacci sequence using recursion
let num = 20;

function fibonacci(num){
    if(num < 2) return num;
    else return fibonacci(num-1)+ fibonacci(num-2);
}


for(let i=0; i< num;i++){
    console.log(fibonacci(i));
}