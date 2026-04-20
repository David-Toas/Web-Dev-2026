// alert is used to show a pop-up message to the user
// alert("welcome to javascript");
// console.log is used to print a message to the console
console.log("welcome to javascript");

// Variable declaration
// string
const name = "Olabode";
// console.log(typeof name);
// console.log(name);

// number
let age = 19;
// console.log(typeof age);
// console.log(age);

// boolean
let walking = false;
// console.log(walking);
// console.log(typeof walking);

let addition = 5 + 10;
// console.log(addition);

let addMe = 5 + "10";
// console.log(addMe);

// undefined is used to represent a variable that has not been assigned a value
let a;
// console.log(a);
// console.log(typeof a);

// null is used to represent the absence of a value
let b = null;
// console.log(b);
// console.log(typeof b);

// -------------------------------------------------------------------------
// Operators
// ---------------------------------------------
// Arithmetic operators
// + - * / % **

let x = 10;
let y = 5;
let d = "5";
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Comparison operators
// == === != !== > < >= <=

// console.log(x == y); //false
// console.log(y === d); //false
// console.log(x != y); //true
// console.log(x !== d); //true
// console.log(x > y); //true
// console.log(x < y); //false
// console.log(x >= y); //true
// console.log(x <= y); //false

// Logical operators
// && || !

// console.log(x > y && y > 0);
// console.log(x > y || y < 0);
// console.log(!(x > y));

// COnditional statements

// if, else statements
// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote, wait for your time");
// }

// if, else if, else statements
// if (age <= 5) {
//   console.log("You are a baby.");
// } else if (age > 5 && age <= 12) {
//   console.log("You are a child.");
// } else if (age > 12 && age <= 19) {
//   console.log("You are a teenager.");
// } else if (age > 19 && age <= 59) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a senior citizen.");
// }

// switch statement
age = prompt("Please enter your age:");
switch (true) {
  case age <= 5:
    console.log("You are a baby.");
    break;
  case age > 5 && age <= 12:
    console.log("You are a child.");
    break;
  default:
    console.log("You are not a baby or child.");
}
