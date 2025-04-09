// JavaScript program to shuffle the deck of cards

const values = ["Heart","Diamonds","Spades","Clubs"];
const suits = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

let deck =[];

for(let i=0; i< suits.length; i++){
    for(let j=0; j< values.length; j++){
        let card = {
            Value: values[j],
            Suit: suits[i]
        };
        deck.push(card);
    }
}
// Knuth Shuffle or Fisher-Yates Shuffle
for(let i = deck.length-1; i > 0; i--){
    let j= Math.floor(Math.random()* (i+1));
    let temp = deck[i];
    deck[i] =deck[j];
    deck[j] = temp;
}
console.log("First ten cards are:");

for(let i=0; i<10; i++){
    console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}