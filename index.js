// first alert
alert("Hello World");

// this is second alert how to write a comment
alert("How are You");

let myName = "Bryan";
let myAge = 16;

if ("myAge >= 18") {
    console.log(myName + ", you are eligible to vote")
} else {
    console.log(myName + ", you are not eligible to vote")
}

let balance = 20000
let withdrawal = 8000

if (withdrawal <= balance) {
    console.log("Transaction successful")
} else {
    console.log("Transaction failed")
}

// Day 2 
let age = 25;
let name = 'Bassey';
let email = 'basseyedubio@gmail.com';

age = 40;

const phone = '08121970016'

console.log(`Name: ${name} \nEmail: ${email} \nAge ${age} \nPhone Number ${phone}`)

console.log(10 === 10) // true (strict equality)
console.log(10 !== 5)  // true (not equal)
console.log(10 > 5)    // true
console.log(10 < 5)   // false
console.log(10 >= 5)  // true 
console.log(10 <= 5)  // false

for (let i = 2; i <= 10; i++) {
    console.log("Count:" + i);
}
