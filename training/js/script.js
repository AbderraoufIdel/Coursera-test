// // Object creation
// var idel = {
//     name: "IDEL",
//     ceo : {
//         firstname:"Abderraouf",
//         favcolor:"None"
//     } ,
//     "stock price of IDEL": 666
// };
// console.log("the CEO of this Project is " + idel.ceo.firstname);

// function makemultiplier (multiplier) {
//     function func (x){
//         return multiplier * x;
//     };
//     return func;
// };

// makemultiplier.version = "v1.0.1";
// var x = InputEvent("What you wanna double:");
// var doubleit = makemultiplier(x);
// console.log(doubleit);
// console.log("You are Wroking With This version is " + makemultiplier.version);


// //Funtion Constructors
// function Circle (Raduis) {
//     this.Raduis = Raduis;
// };
// Circle.prototype.getArea = function () {
//     return Math.PI * Math.pow(this.Raduis,2);
// };

// var myCircle = new Circle(66);
// console.log(myCircle);
// console.log(myCircle.getArea());
// //End of Funciton Constructors

// function Dog(name) {
//     this.name = name;
//   }
  
// Dog.prototype.bark = function () {
//     console.log(this.name + " likes barking! Bark!");
// }
    
// var max = new Dog("Max", "Buddy");
// max.bark();