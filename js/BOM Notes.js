'use strict';

/* setInterval() & clearInterval */

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);


/* setTimeout() */

var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring