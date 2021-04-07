'use strict';

/***** JQUERY SELECTORS *****/

/** select an element by the id. Alert the contents of the element:*/
// var contents = $('#content').html();
// alert(contents);

//assign the jquery to a var, then call it in an alert (h1 content will display)


/** create a border around all elements with the class codeup that is 1 pixel wide and red. */
$('.codeup').css('border','1px solid red');

//or like an object:
// $('.codeup').css({'border':'1px solid red'});

// ?? couldn't remove class using: $('li').removeClass('codeup');
// ?? couldn't put class on <ul>, is something overriding it?


/** Set the font-size of all li elements to 20px.*/
$('li').css({'font-size':'20px', 'color':'blue'});

// ?? Not sure why this didn't work like the example above:
// $('li').css('font','blue 20px');


/** Craft selectors that highlight all the h1, p, and li elements.*/
$('h1, p, li').css({'backgroundColor':'pink'})



//example with outside function
// function h1Click() {
//     $(this).css('background', 'limegreen');
// }
//
// $('h1').click(h1Click);
//
// //example with multiple functions using BOTH outside and inside
// function hovering(e) {
//     console.log('enter');
//     $(e.target).css('color', 'red');
// }
//
// $('li').hover(hovering, function() {
//     console.log('leave');
//     $(this).css('color', 'black');
// });

