// JS Program to check if the string is palindrome or not

function checkPalindrome(str){
    let len = str.length;
    for(let i =0; i< len/2; i++){
        if(str[i] !== str[len-1-i]){
            return "String is not Palindrome"
        }
    }
    return "String is Palindrome"
}

const word= "Nayan";
console.log(checkPalindrome(word));