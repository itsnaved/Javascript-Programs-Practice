function sum(){
    if(arguments.length ==0){
        console.log("You have passsed 0 argument");
    }
    else if(arguments.length ==1){
        console.log("pass atleast 2 arguments");
    }
    else{
        let res = 0;
        for(i=0; i< arguments.length; i++){
            res += arguments[i];
        }
        console.log(res);
    }
}
// In JavaScript (outside of a class), when you define a function with the same name again, the last one overrides the earlier one.

// function sum(){
//     console.log("THis is the second Method");
// }

sum();
sum(1);
sum(1,2);
sum(1,2,3,4,5,6,7,8,9,10);