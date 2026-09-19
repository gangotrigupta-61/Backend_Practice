// OBJECT Prototype
let arr1=[1,2,3];
let arr2=[1,2,3];
arr1.sayHello=()=>{
    console.log("Hello! I am arr1");
};
arr2.sayHello=()=>{
    console.log("Hello! I am arr2");
};

// Factory Function
function PersonMaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        }
    };
    return person;
};
let P1=PersonMaker("Gangotri",20);
let P2=PersonMaker("Shivam",20);
// here P2 and P2 will create their own separate talk function so more memory will be used then in constructors Prototypes are introduced which does not use separate memory.


// Constructors
function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}
Person.prototype.talk=function(){
    console.log(`Hi, my name is ${this.name}`);
}

let person1=new Person("Shi",20);
let person2=new Person("Gangotri",20);

// Classes 
class P{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
};
let pers1=new P("Shivi",20);
let pers2=new P("Gangotri",20);


// Inheritance

class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{
    constructor(name){
          super(name);
    }
    bark(){
        console.log("WOOFF---");
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..");
    }
// child function will override parent function
    eat(){
        console.log ("Cat is Eating!!");
    }
}

let cat1=new Cat("Sini");
console.log(cat1);
let dog1=new Dog("tuffie");
console.log(dog1);