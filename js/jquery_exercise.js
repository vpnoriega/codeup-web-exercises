'use strict';

/***** JQUERY SELECTORS *****/

/** select an element by the id. Alert the contents of the element:*/
// var contents = $('#content').html();
// alert(contents);

//assign the jquery to a var, then call it in an alert (h1 content will display)


/** create a border around all elements with the class codeup that is 1 pixel wide and red. */
// $('.codeup').css('border','1px solid red');

//or like an object:
// $('.codeup').css({'border':'1px solid red'});

// ?? couldn't remove class using: $('li').removeClass('codeup');
// ?? couldn't put class on <ul>, is something overriding it?


/** Set the font-size of all li elements to 20px.*/
// $('li').css({'font-size':'20px', 'color':'blue'});

// ?? Not sure why this didn't work like the example above:
// $('li').css('font','blue 20px');


/** Craft selectors that highlight all the h1, p, and li elements.*/
// $('h1, p, li').css({'backgroundColor':'pink'})


/***** Jquery Mouse Events *****/


/** change the background color of an h1 element when clicked. */
//example with named function as a callback function:
function h1Click() {
    $(this).css('background', 'cornflowerblue');
}
// ** 'this' is referring to the element being called below:
$('h1').click(h1Click);


/***** Make all paragraphs have a font size of 18px when they are double clicked *****/
//example with anonymous function as a callback function:
// $('p').dblclick(function(e) {
//     $(e.target).css('font-size', '18px');
// });

//refactored with named function as a callback function:
function dosClick(e){
    $(e.target).css('font-size', '18px');
}
$('p').dblclick(dosClick);


/***** Set all li text color to red when the mouse is hovering; reset to black when it is not*****/
// hover handler combines 2 event handlers (mouseenter and mouseleave), so you need 2 callback functions to work together:

function hovering(e) {
    console.log('enter');
    $(e.target).css('color', 'red');
}
$('li').hover(hovering, function() {
    console.log('leave');
    $(this).css('color', 'black');
});

// ** Syntax for hover:
// $( selector ).hover( handlerIn, handlerOut)

// ** Syntax for attaching both handlers separately:
// $( selector ).mouseenter(handlerIn)
// $( selector ).mouseleave(handlerOut);

