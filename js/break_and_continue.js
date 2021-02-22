//Number 1: Create File

//Number 2 & 3:
while (true) {
    var userNumber = Number(prompt("Enter an odd number between 1 and 50: "));
    if (userNumber % 2 === 1 && userNumber < 50 && userNumber > 0) {
        console.log("Number to skip is: " + userNumber);
        for (i = 1; i < 50; i += 2) {
            if (userNumber === i) {
                console.log("Yikes! Skipping number: " + userNumber)
                continue;
            }
            console.log("Here is an odd number: " + i);
        }
    }
    break
}
//condition 1: it has to be a valid number
//condition 2: if it's not a valid number
// make a loop that outputs all the odd #'s between 1-50

/* Class review notes: break it into 2 functions:

function isNumberInRange (num){
    return num >= 1 && num <=50;
    }
function isNumberEven (num){
    return num % 2 ===0;
    }
 while(true){
    if (!isNumberEven(userNumber) && isNumberInRange(userNumber)){
         break;
 }
 userNumber = Number(prompt( "give me an odd number between 1 and 50: ");
 }
 console.log ("Number to skip is: + userNumber);
 for (var i=1; i<= 49; i+=2){
    if (userNumber === i){
    console.log ("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log ("Here is an odd number: " + i);
 }
 */