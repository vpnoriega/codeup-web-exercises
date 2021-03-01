//Math.round()
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Math.round()
console.log(Math.round(20.49))
console.log(Math.round(20.5))
console.log(Math.round(-20.5))
console.log(Math.round(-20.51))

//Math.ceil(x)
console.log(Math.ceil( .95))
console.log(Math.ceil(7.004))

//Math.floor(x)
console.log(Math.floor( 20.00008))
console.log(Math.floor(20.999999))


//Math.pow(x,y)
console.log(Math.pow(2,16))

//Math.sqrt(x)
console.log(Math.sqrt(9));  // 3
console.log(Math.sqrt(2));  // 1.414213562373095
console.log(Math.sqrt(1));  // 1
console.log(Math.sqrt(0));  // 0
console.log(Math.sqrt(-1)); // NaN

// CONSTANTS: They will never change
Math.E
Math.PI