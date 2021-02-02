console.log("Hello from External Javascript");
alert("Welcome to my Website!");

var favoriteColor = prompt ('What is your favorite color?');
console.log('The users favorite color is ' + favoriteColor + '!');
alert('Great, my favorite color is ' + favoriteColor + ' too!');

var movieRental = prompt ("How many nights would you like to rent the movie for?");
console.log('Movie has been rented for ' + movieRental + ' nights!');
alert('Great, you can rent the movie for ' + movieRental + ' nights!');

var googlePay = prompt ('How many hours did you work at Google this week?');
console.log('Employee worked ' + googlePay + ' hours.');
alert('Great, so you will get paid ' + '$' + googlePay*400 + ' dollars!')

var fullClass = confirm ("Is this class full?");
var classConflict = confirm ("Does this class interfere with your morning schedule?");
alert ("Enrolled in class and does not conflict is a " + (fullClass && classConflict) + " statement.")

var productExpired = confirm ("Is the offer expired?");
var memberType = confirm ("Are you a premium member?");
var numberofProducts = prompt ("How many products do you have?");