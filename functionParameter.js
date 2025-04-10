function greetings(){
    return "Hello";
}

function name(user, func){
    const message = func();

    console.log(`${message} ${user}`);
}

name ("Apple", greetings);
name("Orange", greetings);
name("Grape", greetings);