console.log("Hello from External Javascript");
alert("Welcome to my Website!");

//Favorite Color
var favoriteColor = prompt ('What is your favorite color?');
console.log('The users favorite color is ' + favoriteColor + '!');
alert('Cool, my favorite color is ' + favoriteColor + ' too!');

//Movie Problem
var LMrental = parseInt (prompt ("How many nights would you like to rent the movie Little Mermaid for?"));
console.log('Little Mermaid has been rented for ' + LMrental + ' nights.');
alert('Great, please return the movie Little Mermaid in ' + LMrental + ' days!');

var BBrental = parseInt (prompt ("How many nights would you like to rent the movie Brother Bear for?"));
console.log('Brother Bear has been rented for ' + BBrental + ' nights.');
alert('Awesome, please return the movie Brother Bear in ' + BBrental + ' days!');

var HCrental = parseInt (prompt ("How many nights would you like to rent the movie Hercules for?"));
console.log('Hercules has been rented for ' + HCrental + ' nights.');
alert('Fantastic, please return the movie Hercules in ' + HCrental + ' days!');

var totalOwed =(3*(LMrental + BBrental + HCrental));
console.log('Customer owes $' + totalOwed + '.');
alert ("Thank you for renting from V Ness Movies! Each movie costs $3 per night to rent, so you owe $" + totalOwed + ".");

//Contractor Problem
var googleHours = parseInt (prompt ('How many hours did you work at Google this week?'));
console.log('Employee worked ' + googleHours + ' hours at Google.');
alert('Great, you will get paid $' + googleHours*400 + ' from Google!');

var amazonHours = parseInt (prompt ('How many hours did you work at Amazon this week?'));
console.log('Employee worked ' + amazonHours + ' hours at Amazon.');
alert('Nice, you will get paid $' + amazonHours*380 + ' from Amazon!');

var facebookHours = parseInt (prompt ('How many hours did you work at Facebook this week?'));
console.log('Employee worked ' + facebookHours + ' hours at Facebook.');
alert('Sweet, you will get paid $' + facebookHours*350 + ' from Facebook!');

var totalPayCheck = ((googleHours*400) + (amazonHours*380) + (facebookHours*350));
console.log('Employee will receive $' + totalPayCheck + ' for this week\'s paycheck.');
alert ('Cha Ching! You will get paid $' + totalPayCheck + " this week!");

//Student Enrolled Problem
var fullClass = confirm ("Is this class full?");
var classConflict = confirm ("Does this class interfere with your morning schedule?");
alert ("Enrolled in class and does not conflict is a " + (!fullClass && !classConflict) + " statement.");

//Product Expired Problem
var productExpired = confirm ("Is the offer still valid?");
var memberType = confirm ("Are you a premium member?");
var numberofProducts = parseInt(prompt ("How many products do you have?"))>=2;
var canUserUseOffer = (numberofProducts|| memberType) && productExpired;
alert ("Customer can use this offer is a " +canUserUseOffer+ " statement.");