(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {}
    person.firstName = "Vanessa"; // --> object.key = 'value';
    person.lastName = "Noriega"; // -->  object ['key'] = 'value'; **array notation**

    // var person = {
    //     firstName: "Vanessa", // --> This is the most common way
    //     lastName: "Noriega"
    // }

    console.log(person.firstName);
    console.log(person.lastName);

    // console.log(person); --> this will only show you: {firstName: "Vanessa", lastName:"Noriega"}

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    function sayHello() {
        return "Hello " + person.firstName + " " + person.lastName + "!"
    }

    console.log(sayHello());

    //"this" is referencing the object name, so you can put:

    // var sayGreeting = function (){
    //         return "Hello " + this.firstName + " " + this.lastName + "!"
    //     };

    // person.sayHello = sayGreeting;
    // personTwo.sayHello = sayGreeting

    // console.log(person.sayHello())
    // console.log(personTwo.sayHello())




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discount(amount) {
        if (amount > 200) {
            return amount - (amount * .12)
        } else {
            return amount;
        }

    }
//shoppers is a list of people, shopper is just one person.
    shoppers.forEach(function (shopper) {
        console.log(shopper.name + " owes before discount $" + shopper.amount + " but with discount owes $" + discount(shopper.amount));
    });

    /* sams way:
    shoppers.forEach(function(shopper){
        if (shopper.amount > 200){
            var discount = shopper.amount *.12;
            var newAmount = shopper.amount = discount;
            console.log(shopper.name + " you were originally going to spend $" + shopper.amount + ", but your discount total is now $" + newAmount + "!")
        } else {
        console.log(shopper.name + " you still owe $" + shopper.amount + " you did not get a discount." )
      })
     */


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: 'The Outsiders',
            author: {
                firstName: "S.E.",
                lastName: "Hinton"
            }
        },
        {
            title: 'To Kill A Mockingbird',
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: 'The Great Gatsby',
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: 'Things Fall Apart',
            author: {
                firstName: "Chinua",
                lastName: "Achebe"
            }
        },
        {
            title: 'The Color Purple',
            author: {
                firstName: "Alice",
                lastName: "Walker"
            }
        }
    ];

    // console.log(books[0].title + ", written by: " + books[0].author.firstName + " " + books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (var i = 0; i < books.length; i++) {
        console.log("Book # " + (i + 1) + '\n' + "Title: " + books[i].title + '\n' + "Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }

    /* Sams way:
    books.forEach(function(book,index){
        console.log("Book # " + (index + 1);
        console.log("Title " + book.title);
        console.log("Author " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    })
He also showed the way for line break, pretty much the same except he referred to the index number directly in "Book # " + (index + 1));
     */

// The initial set up for the console log:
// books[i].title + ", written by: " + books[i].author.firstName + " " + books[i].author.lastName)

// Before the for loop, I did this for each book:
// console.log(books[0].title + ", written by: " + books[0].author.firstName + " " + books[0].author.lastName);


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title,author){
        var book = {}
        book.title = title;
        book.author = author;
        return book
    }
    console.log(createBook('x','y'))

    function showBookInfo(book){
        for (var i = 0; i < book.length; i++) {
            console.log("Book # " + (i + 1) + '\n' + "Title: " + book[i].title + '\n' + "Author: " + book[i].author.firstName + " " + book[i].author.lastName);
        }
    }
    console.log(showBookInfo(books))


    /*   SAM's Way, I couldn't figure it out:

 function createBook(title, authorFirst, authorLast) {
         return {
                 title: title,
                 author: {
                    firstName: authorFirst,
                    lastName: authorLast
                }
            }
        }
       console.log(createBook('Book Title Name', 'First Name' , 'Last Name')

 function showBookInfo (bookObject, bookNumber){
    console.log("Book # " + (index + 1);
    console.log("Title " + book.title);
    console.log("Author " + book.author.firstName + " " + book.author.lastName);
    console.log("---");

 books.push(creatBook(book,index){
    showBookInfo(book,index);
 })

*/



})();