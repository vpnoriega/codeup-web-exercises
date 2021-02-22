"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data
var instructor1 = "Samual";
var instructor2 = "Kenneth";
var instructor3 = "Douglas";
// too many variables.


/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

// An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
var pies = [];
console.log(pies)


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies)

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];
var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes)



// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["douglas", "kenneth", "samuel", "justin", "fernando"]
var instructors = ["douglas", "kenneth", "samuel", "justin", "fernando"];
console.log(instructors)

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek)

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ['wings', 'tacos', 'sushi', 'lasagna', 'grilled steak'];
console.log(favoriteFoods)


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

console.log("The length of shapes is: " + shapes.length );


// TODO: console.log the length of the instructors array

console.log("The length of instructors array is: " + instructors.length );


// TODO: console.log the length of the daysOfTheWeek array

console.log("The length of days of week array is: " + daysOfTheWeek.length);


// TODO: console.log the length of the favoriteFoods array

console.log("The length of favorite foods array is: " + favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.


// TODO TOGETHER: What do we expect the following to output?

	console.log(shapes[0]); // square
	console.log(shapes[1]); // rectangle
	console.log(shapes[2]); // circle
	console.log(shapes[3]); // triangle
	console.log(shapes[4]); // there is no value, so undefined



// TODO: console.log each element of the instructors array
console.log (instructors[0]);
console.log (instructors[1]);
console.log (instructors[2]);
console.log (instructors[3]);
console.log (instructors[4]);


// TODO: console.log the first three elements of the daysOfTheWeek array
console.log (daysOfTheWeek[0]);
console.log (daysOfTheWeek[1]);
console.log (daysOfTheWeek[2]);



// TODO: console.log the first three elements of the favoriteFoods array
console.log (favoriteFoods[0]);
console.log (favoriteFoods[1]);
console.log (favoriteFoods[2]);




// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

// we know we have to get the length of the array - 1
// array.length - 1 <== represents the last item in an array

//1. create function named returnLastElement
//2. this function accepts an array
//3. get the last item in the array by using array.length - 1
//4. return the last item


// console.log(returnLastElement(instructors)); //fernando
// console.log(returnLastElement(daysOfTheWeek)); //sunday





/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape




// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.



// TODO: What happens if we change var i = 1? or var i = 2;
// TODO: What are benefits of using loops to iterate?
// TODO: How does the loop know when to stop iterating?


// TODO: Using a for loop, iterate through the instructors array and console.log each instructor


// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week


// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food



// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"



/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array



// TODO TOGETHER: Using a for each loop, console.log each element from the following array: var pies = ["apple", "cherry", "key lime", "huckleberry"];



// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor



// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week



// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food