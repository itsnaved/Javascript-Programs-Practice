function checkNumber(x){
    if(typeof x == 'number' && !isNaN(x)){
        if(Number.isInteger(x)){
            console.log(`${x} is an Integer`);
        }else{
            console.log(`${x} is a float value`);
        }       
    }
    else{
        console.log(`${x} is not a Number`);
    }
}

checkNumber(22);
checkNumber(323);
checkNumber(33.5);
checkNumber(NaN);
checkNumber("Hello");