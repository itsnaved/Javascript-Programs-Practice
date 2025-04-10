// function reverseString(str){
//     let newString = "";
//     for(let i= str.length-1; i>= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }

// console.log(reverseString("Hello Javascript"));

function reverseString(str){
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join();
    

    return joinArray;
}

console.log(reverseString("Hello Naved how are you"));

