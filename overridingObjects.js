let person= {
    greet(){
        console.log("Hello from person");
    }
};

let student = Object.create(person);

student.greet = function(){
    console.log("Hello from student");
};

student.greet();