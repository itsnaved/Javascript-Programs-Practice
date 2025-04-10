class Animal{
    speak(){
        console.log("Animals make sound");
    }
}

class Dog extends Animal{
    speak(){
        super.speak();
        console.log("Dog Barks");
    }
}

const dog = new Dog();
dog.speak();      /// class Dog method get executed here in that method super call statement is used to execute method of Animal class