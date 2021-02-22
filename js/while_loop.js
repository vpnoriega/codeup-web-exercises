//While Loop
var i = 1
while (i <= 16) {
    console.log(2**i);
    i++;

}

//Do While loop
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("How many cones I need to sell: " + allCones);

do {
    var conesPerCustomer = Math.floor(Math.random() * 5) + 1;

    if (conesPerCustomer <= allCones) {
        allCones -= conesPerCustomer // has to be INSIDE the if statement because it is considered a conditional, as in, you have to check how many cones you have first before you confirm the order
        console.log(conesPerCustomer + " cones sold.");
    }else {
        console.log("Cannot sell you " + conesPerCustomer + " cones, I only have " + allCones + " cones left!");
    }

} while (allCones > 0);
console.log("Yay! I sold them all!");
