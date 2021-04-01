//i. locating in the DOM

// TODO: Find an element by the id of "hat-search". Store the result into a variable. Use a console log to check what is in your variable.

var hatSearch=document.getElementById("hat-search");
console.log(hatSearch);

// TODO: Find all of our elements we made flex containers in Bootstrap! Locate the .d-flex class, store all of your results into a variable, and then console.log them.

var flexItems = document.getElementsByClassName('.d-flex');
console.log(flexItems)


// TODO: Finish my FOR loop to go through that variable containing our d-flex'ed items and console.log each individual one within the loop!

for(var i=0 ; i < flexItems.length; i++){
console.log(flexItems[i])}

// TODO: Find all of our div elements and store them into a variable~! Console.log the variable to see the results within!

var divItems = document.getElementsByTagName('div');
console.log(divItems)

// TODO: Now that we have a variable with all of the elements, can you tell me how many divs are in the HTML using that variable and a little Javascript? Hint: the variable looks and behaves a lot like an array, doesn't it? That helped us in our for loop's condition!

console.log(divItems.length);

// TODO BONUS (a): Write a function called locateDivs. When locateDivs is called, it should return a collection of the div elements found.

function locateDivs(){
    return document.getElementsByTagName("div")
}

// TODO BONUS (b): Write a function called locateElements. locateElements should take in one parameter, the element to be searched for, and then return a collection of those elements. If no elements by that name were found, return false.

function locateElements(element){
    return document.getElementsByTagName(element)
}

// ii. a step further: accessing / looking into what we've located deeper

// innerHTML/innerText

// TODO: Howell's doesn't sound like the name you'd give your hat shop - let's change the innerText of that in our navigation bar to your own name.

    var navName = document.getElementsByClassName('navbar-brand');
    console.log(navName[0].innerText);
    navName[0].innerText = "Noriega's"
    console.log(navName[0].innerText)

// TODO: There's only one ordered list on the page - can you get into that ordered list and use innerHTML to change the list items within that ordered list to what you think the top sellers were?

var listItems = document.getElementsByTagName('ol');
    console.log(listItems[0].innerHTML);
    listItems[0].innerHTML="1. funny hat 2. beanie 3. santa hat";
console.log(listItems.innerHTML);

// TODO (BONUS): I have two "special-offer" classes used in my table - grab those classes by name, store them into a variable, and then use a loop to replace the innerHTML. The new table data should have strings that let our customers know that "New discounts are coming soon!"

// var offerReplacement = document.getElementsByClassName("special-offer")
// for (var i=0; i<offerReplacement; i+=){
//     offerReplacement.innerHTML="New discounts are coming soon!"
// }


// attributes ** I did not understand this at all **

// TODO: Bringing in Bootstrap components, sometimes we can forget to change example or demo related text - one of my ids in the HTML is set to "navbarTogglerDemo02". I don't think we need that ID at all, can you remove that attribute for me? Start by storing it in a variable!
var deleteAtt = document.getElementById("navbarTogglerDemo02");
deleteAtt.removeAttribute("id")


// TODO: Uh oh - actually there was a BUTTON that referred to 'navbarTogglerDemo02' that is right above it in our HTML structure! Let's add an ID back to the variable you used above that makes more sense (perhaps "navbar-collapser"?)



// TODO: Now, get into that button element that makes reference to our old "navbarTogglerDemo02" ids and change those attributes to match. Refactor complete!



// style

// TODO: I've embedded a style sheet that adjusts color for the body, a class called "main-content", and an ID of "top-header". Target the three of these elements and set your own colors as you'd like to each of the three I've mentioned.

var bodyColor = document.getElementsByTagName('body')[0];
bodyColor.style['background-color'] = "grey";

var mainContent = document.getElementsByClassName('main-content');
mainContent[0].style.color="rebeccapurple";

var topHeader = document.getElementById('top-header');
topHeader.style.color="aqua";

// TODO (BONUS): That default bootstrap font is nice, but we've been adding our own fonts to thing for a couple of weeks now! Add a font-family of some kind that you'd like it to adjust to.