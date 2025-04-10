class Animal{
    speak(){        /// speak is a Method
        console.log("The animal makes sound");
    }
}

class Dog extends Animal{
    speak(){             /// speak is a method with the same name
        console.log("The dog barks");
    }
}


const a= new Animal();
a.speak();

const d= new Dog();
d.speak();