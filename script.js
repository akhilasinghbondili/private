// reserved keywords of keywords
// public, public,protected

// // public
// Accessible from anywhere, both inside and outside the class.	
// ex : this.name, this.speak()
	
// class user{
//     name="akhila"
// }
// let obj = new user ()
// console.log(obj.name);

// // private
// 	Accessible only within the class. Implemented using # syntax.  
// ex : #name, #speak()

// class Example {
//     #privateProperty = "I'm private!";

//     #privateMethod() {
//       console.log("This is a private method!");
//     }

//     publicMethod() {
//       console.log(this.#privateProperty);  
//       this.#privateMethod();            
//     }
//   }
//   const obj = new Example();
//   obj.publicMethod();  
//   console.log(obj.#privateProperty);  // SyntaxError: Private field '#privateProperty' must be declared in an enclosing class
//   obj.#privateMethod(); 

// protected (_)
// The protected modifier allows a member to be accessible inside the class and 
// in any subclasses derived from that class, but not outside the class hierarchy.

// class user {
//     protectedname ="akhila"
//     getuser(){
//         return this.name
//     }
// }
// class userinfo extends user{
//     age=40;
//     setusername(){
//         return this.name= "keerthi"
//     }
// }
// let obj = new user ()
// console.log(obj.getuser());
// let obj2= new userinfo ()
// console.log(obj2.setusername());



// ex :

// class parentclass {
//     constructor(){    // Private field (not accessible outside the class)
//         this._protectedproperty = " this is property";
//     }
//     getprotectedproperty(){           // Public method to access private property
//         return this._protectedproperty;
//     }
//     protectedmethod(){             // Public method
//         console.log("this is protected method")
//     }
// }
// class childclass extends parentclass{
//     userprotected(){
//         console.log(this.getprotectedproperty());         // Accessing private property via public method
//         this.protectedmethod();                 // Calling protected method
//     }
// }
// const child = new childclass();
// child.userprotected();
// console.log(child.getprotectedproperty());
// child.protectedmethod();



// extending built in class
// ARRAY
// class MyArray extends Array {
//     getfirst(){
//         return this [0];
//     }
// }
// const arr = new MyArray (1,2,3);
// console.log(arr.getfirst());


// Extending error

// class customerror extends Error {
//     constructor (message,code){
//         super(message);
//         this.code=code;
//     }
// }
// const err = new customerror ("sometimes went wrong", 500);
// console.log (err.message);
// console.log (err.code);


// Date

// class MyDate extends Date{
//     getformattedDate(){
//     return `${this.getFullYear()}-${this.getMonth()+1}-${this.getDate()}`;
//     }
// }
// const today = new MyDate();
// console.log (today.getformattedDate());


// typeof
// instanceof

// const a = "akhila";
// const b = new String("string obj");

// console.log (typeof a);
// console.log (typeof b);

// --------------
// function animal(name){
//     this.name =name;
// }
// const dog = new animal ("buddy");
// console.log ( dog instanceof animal);

// ===============
//  instanceof with inheritance 

// function Animal(name) {
//     this.name = name;
//   }
  
//   function Dog(name) {
//     Animal.call(this, name);
//   }
  
//   Dog.prototype = Object.create(Animal.prototype);
//   Dog.prototype.constructor = Dog;
  
//   const myDog = new Dog("Rex");
  
//   console.log(myDog instanceof Dog);   // true
//   console.log(myDog instanceof Animal); 

// checking with built in types

// const array = [1, 2, 3];
// const date = new Date();

// console.log(array instanceof Array);  // true
// console.log(date instanceof Date);    // true
// console.log(array instanceof Object); // true (because Array is an object)
// console.log(date instanceof Object); 

// PRIMITIVE TYPES 

// const str ="hello";
// console.log (str instanceof String);

// const num = 76;
// console.log (num instanceof String);


// Mixins
// A class uses methods from other objects 
// object.assign ...,...

// class vehicle {
//     move(){
//         alert("moving now")
//     }
// }
// let infraredsensor = {
//     checktemperature(){
//     alert('checking temperature ');
//     }
// }
// Object.assign(vehicle.prototype, infraredsensor);

// let mycar = new vehicle();
// mycar.move();
// mycar.checktemperature();


// I dont really have to build up the inheritance relationship ,but 
// i can use the feature from the objects and that is merit of 
// using object.assign 