"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName === 'blue') {
        return ("Blue is the color of the sky!");
    } else if (colorName === 'red') {
        return ("Strawberries are red!");
} else {
        return (colorName + " is not listed above.");
    }
}

var returnAnswer = analyzeColor('blue');
console.log (returnAnswer);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor))

/**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */

switch (randomColor) {
    case "blue":
        console.log("Blue is the color of the sky!");
        break;
    case "red":
        console.log("Strawberries are red!");
        break;
    default:
        console.log("These colors are not listed above.");
}

/**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
var userColor = prompt("Enter your favorite color: ");
alert(analyzeColor(userColor))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount) {

    var discPrice;

    if (luckyNum === 0) {
        return totalAmount;
    } else if (luckyNum === 1) {
        discPrice = (totalAmount - ((totalAmount * 10) / 100));
        return discPrice;
    } else if (luckyNum === 2) {
        discPrice =  (totalAmount - ((totalAmount * 25) / 100));
        return discPrice;
    } else if (luckyNum === 3) {
        discPrice =  (totalAmount - ((totalAmount * 35) / 100));
        return discPrice;
    } else if (luckyNum === 4) {
        discPrice =  (totalAmount - ((totalAmount * 50) / 100));
        return discPrice;
    } else if (luckyNum === 5) {
        discPrice =  (totalAmount - ((totalAmount * 100) / 100));
        return discPrice;
    } else {
        return "Lucky number not applied";
    }
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 // * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = Number(prompt("What is your total amount?"));
alert ("Your lucky number is: " + luckyNumber);
confirm ("Your total amount is $" + totalAmount + " so your discounted price is now $" + calculateTotal(luckyNumber,totalAmount));


 /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
 * - whether the number is even or odd
 // * - what the number plus 100 is
 // * - if the number is negative or positive
 // *
 // * if what the user enters is not a number, use an alert to tell them that, and
 // * do *not* display any of the above information.
 // *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

 var question = confirm("Would you like to enter a number?");
    if (question){
var answer = Number(prompt("Enter a number: "));
if (answer) {

    var userHund = answer + 100

    if (answer % 2 === 0) {
        console.log("The number is even.");
        console.log("The number plus 100 is " + userHund)

        if (answer < 0) {
            console.log(answer + " is a negative number.");
        } else {
            console.log(answer + " is a positive number.")
        }

    } else {
        console.log("The number is odd.");
        console.log("The number plus 100 is " + userHund)

        if (answer < 0) {
            console.log(answer + " is a negative number.");
        } else {
            console.log(answer + " is a positive number.")
        }
    }
}

else{
     alert("The value you entered is not a number.");
    }
 } else { console.log ("User pressed cancel.")}