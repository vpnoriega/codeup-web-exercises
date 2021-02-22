//Number 1: Create File
//Number 2:
function showMultiplicationTable (x){ //if in a function, you can use it multiple times
    for (var i =1; i<=10; i++) {
        console.log(x +" x " + i + " = " + (x * i));
    }
}
showMultiplicationTable(7)

//Number 3:
for (var i = 1; i <= 10; i++) {
    num = (Math.floor(Math.random() * (200 - 20 + 1) + 20))
    if (num % 2 === 0)
        console.log(num + " is even.")
    else console.log(num + " is odd.")
}

// Number 4:
for (var O = 1; O <10; O++) { // O = Outerloop prints # of rows
    var output = ""; // actual string because it's not a legit number, so it will print a number
    for (var I = 1; I<=O; I++){ // I = innerloop prints how many times to repeat the row number, as in do your thing until your innerloop number matches the outerloop number
        output = output + O; // empty string + outerloop
    }
    console.log (output);
}

//Number 5
for (var i = 100; i >= 5; i-=5) {
    console.log(i);
}

