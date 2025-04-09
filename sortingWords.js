let sentence = "i am learning javascript";

let words = sentence.split(" ");
words.sort();

console.log("The sorted words are: ");

for(let element of words){
    console.log(element);
}