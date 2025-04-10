const a=10;
console.log(a);

{
    const a=50;
    console.log(a);
}
console.log(a);

const arr= ["work","exercise","eat","drink","sleep"];
console.log("original array: "+arr);

// ADD Elements in Array 

arr.push("code");  // push("") is used to add element in end of Array
console.log(arr);

arr.unshift("wake up");  // unshift() is used to add element to the begining of Array
console.log(arr);

arr.splice(2,0, "meditate");  // splice is used add or remove element at specific index in Array
console.log(arr);

// REMOVE Elements from array

console.log("Removing elements from Array");
arr.pop();  // pop() removes last element from array
console.log(arr);

arr.shift();  // shift() removes first element from array
console.log(arr);

arr.splice(2,1);  // At index 2, removes 1 element
console.log(arr);


