"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
    if (isRaining) {
        var umbrella = "Get an umbrella"
    } else {
        var sunglasses = "Grab your glasses!"
        console.log(umbrella); // you can't use the var umbrella because it is hoisted on top
    }

}

// checkWeather(false); //what happens?
// it is undefined VALUE because the var umbrella is hoisted. So it will log undefined



function checkWeatherTwo(isRaining) {
    if (isRaining) {
        const umbrella = "Get an umbrella"
    } else {
        const sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

// checkWeatherTwo(false) //What happens?
//this logs an error because the variable is not defined, so it doesn't exist
// ?? but what is const doing here, like what is the behavior behind it
/*==============================================*/


// let instructor = 'Douglas';
// instructor = 'Kenneth';
// console.log(instructor); //Kenneth

// Kenneth displays in the console because you can modify "let"



// const instructor = 'Douglas';
// console.log(instructor); // Douglas
// instructor = 'Kenneth';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.

// you will have an error because "const" is unchangeable


/*==============================================*/


/*
* let and const (block scope vs. function scope)
*/

// {
//     var a = 10;
// }
// console.log(a); // 10

// {
//     let b = 20;
// }
// console.log(b); // Uncaught ReferenceError: b is not defined
//?? but why is it undefined?

// const c = 30;
// console.log(c); // 30

// console.log(c += 3); //Uncaught TypeError because you cannot reassign a constant variable.


/*==============================================*/
//Further explanation:


// if (false) {
//    var x = 2;
// }
// Undefined - the value of X is undefined, but the variable still exists

//?? wasn't sure what behavior to expect in this example, x+x = 4, but let x = 2 is undefined:
if (false) {
    let x = 2; //Uncaught ReferenceError: x is not defined
    console.log("I'm in the if statement so I can see X:" + x) // will work
}

// console.log(x); // Can't see it because I'm not in the block, will create refError




/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Douglas";
let lastName = "Hirsh";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

// console.log(greeting);

//TODO: Refactor code from above, using template strings.
let newGreeting = `Hello my name is ${firstName} ${lastName}. ${1+2}`

// console.log(newGreeting);


/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0]+ "</li>"
itemsHtml += "<li>" + items[1]+ "</li>"
itemsHtml += "<li>" + items[2]+ "</li>"
itemsHtml += "</ul>";

// console.log(itemsHtml);


//new way
let newItemsHtml = `
    <ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
    <li>${items[2]}</li>
</ul>
`;

// console.log(newItemsHtml);


/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
    name: "Codeup",
    location: "Dallas and San Antonio",
    length: "22 weeks",
    technology: "HTML, CSS, JS, Java"
}

let programLetter = `Hello and thank you for your interest in ${program.name}! Our program is located in ${program.location}. The program lasts ${program.length}.`

// console.log(programLetter);


/*****************************
 *       For Of Loops
 *****************************/

//Basic Loop:

const arr = ["one", "two", "three"];
for (let ele of arr) {
    //console.log(ele);
}
// "ele" is the name of the "let" variable


/*==============================================*/
//TODO: Using for of loops, log each day

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for (let week of days){
     //console.log(week);
}

const colors = ["red", "orange", "yellow", "green", "blue", "ingdigo", "violet"]
for (let rainbow of colors){
    // console.log(rainbow)
}
//notice that you can only use the let INSIDE of the {} because it is a block function. If you use it outside you will get an error


/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Douglas", "Kenneth", "Justin", "Casey", "David"]

for (let names of instructors){
    // console.log(names);
}


/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

function sayHello(name){
    return `Hello ${name}`;
}
//console.log(sayHello("Vanessa"))

// v1 (standard way, better for more lines of code):

let sayHelloAgain = (name) => {return `Hello, ${name}!`}
//console.log(sayHelloAgain('Douglas'))

// v2 (return and brackets/parts are not needed BUT if it's more than one line of code, you DO need version1)

// let sayHelloAgain = name => `Hello, ${name}!`

 //console.log(sayHelloAgain("Douglas")); //Hello Douglas
 //console.log(sayHelloAgain("Justin")); //Hello Justin
 //console.log(sayHelloAgain("Kenneth")); //Hello Kenneth


/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

// function sum(a,b){
// 	return a + b;
// }

let sum = (a,b) => a+b

// console.log(sum(5, 3)); //8
// console.log(sum(5, 20)); //25
// console.log(sum(1, 9)); //10


/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

//Function declaration
// function addOne(arg1) {
//     return arg1 + 1;
// }

// let addOne = (arg1) => {return arg1 + 1}
// console.log(addOne(2)) //3

//You can make it shorter since it's one line:
let addOne = arg1 => arg1 + 1
//console.log(addOne(2))


//Step by Step:

//Step 1: Change function expression
let addOneA = function(arg1){
    return arg1 + 1;
}

//Step 2: Refactor by removing function keyword and add => after the parameter
let addOneB = (arg1) => {
    return arg1 + 1;
}

// Step 3 (if only one statement):
// remove {}
let addOneC = (arg1) => arg1 + 1;
// then remove ()
const addOneD = arg1 => arg1 + 1;


// console.log(addOne(1));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(3));
// console.log(addOneD(5));


/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
// function sayHello(name) {
// 	if (typeof name === 'undefined') {
// 		name = 'World';
// 	}
//
// 	return 'Hello, ' + name + '!';
// }

// console.log(sayHello());; // "Hello, World!"
// console.log(sayHello('codeup'));; // "Hello, codeup!"


let sayHello2 = (name = "World") => `Hello, ${name}!`
// //"world" is the default unless you pass a different value:

// console.log(sayHello2())
// console.log(sayHello2('codeup!'))
//
// // Number example:
let sum2 = (a=1, b = 0) => a + b; //default values are 1 and 0
//console.log('Default Value: ', sum2()); // logs 1 because 1 + 0 = 1
//console.log('Default Value: ', sum2(1,5)) // logs 6 because 1 + 5 = 6

/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

// function helloCohort(greeting, cohort){
//     if(typeof greeting === "undefined"){
//         greeting = "Good Morning";
//     }
//     if(typeof cohort === "undefined"){
//         cohort = "Marco";
//     }
//
//     return greeting + " " + cohort;
// }

let helloCohort = (greeting = "Good Morning" , cohort = "Marco") => `${greeting} my favorite cohort: ${cohort}!`
console.log(helloCohort()) // will log "Good morning my favorite cohort: Marco!" bc GOOD MORNING AND MARCO are the DEFAULT parameters

console.log(helloCohort("good afternoon", "other Cohort")) // will log "Good afternoon my favorite cohort: other cohort" because you passed in 2 different arguments