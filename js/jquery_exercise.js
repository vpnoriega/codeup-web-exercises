'use strict';

//example with outside function
function h1Click() {
    $(this).css('background', 'limegreen');
}

$('h1').click(h1Click);

//example with multiple functions using BOTH outside and inside
function hovering(e) {
    console.log('enter');
    $(e.target).css('color', 'red');
}

$('li').hover(hovering, function() {
    console.log('leave');
    $(this).css('color', 'black');
});