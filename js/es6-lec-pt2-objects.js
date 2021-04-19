/* **************************************************************
*
*       Object Property Variable Assignment Shorthand
*
*****************************************************************/
//TODO TOGETHER: Create a newDog object using shorthand syntax

// let breed = "Mutt";
// let age = 8;
// let dogName = "Kewpie";
// let isCute = true;
//
// //old way, list the keys and the values (values are the let vars above)
// let oldDog = {
// 	breed: breed,
// 	age: age,
// 	dogName: dogName,
// 	isCute: isCute
// }

//console.log(oldDog);


//new way, list the properties and the values will display
// let newDog ={
//     breed,
//     age,
//     dogName,
//     isCute
// }
//
// console.log(newDog);


/*****************************************************************
 *                       Object Destructuring
 *          Shorthand for creating variables from object properties
 *          Based on the name of the key
 *****************************************************************/

var personA = {
    name: 'codeup',
    age: 7
};

//old way
// let name = personA.name;
// let age = personA.age;


//console.log(name); // 'codeup'
//console.log(age); // 4


//TODO TOGETHER: REFACTOR the above approach using ES6

// const {name,age} = personA;
//
// console.log(name);
// console.log(age);

//notice how you combine the properties in the obj first, then assign it to the const


/*==============================================*/


const pals = {
    dog: "Spike",
    cat: "Tom",
    mouse: "Jerry"
};

//old way
// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
//
// console.log(myDog); //Spike
// console.log(myCat); //Tom
// console.log(myMouse); //Jerry


//TODO TOGETHER: REFACTOR the above approach using ES6
//new way

// let {dog,cat,mouse} = pals;
//
// console.log(dog);
// console.log(cat);
// console.log(mouse);
//

/*==============================================*/

//TODO: Use object destructuring with the following object

const theFlash = {
    name: "Barry Allen",
    alias: "The Flash",
    occupation: "Forensic Scientist",
    powers: "Super Speed"
}

let {alias,powers} = theFlash

// console.log(alias);
// console.log(powers);
//

/*==============================================*/
//Destructuring with Arrays

let cats = ["CJ", "Claude", "Max"];

//oldway
// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];


//new way

let [cat1, cat2, cat3] = cats;

// console.log(cat1);
// console.log(cat2);
// console.log(cat3);
//

/*==============================================*/

const alphabet = ['A', 'B', 'C', 'D', 'E'];

//old way
// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];


//TODO TOGETHER: new way

// const[a,b,c] = alphabet;

// console.log(a);
// console.log(b);
// console.log(c);



//TODO TOGETHER: To skip an element...

// const [a, ,c] = alphabet

// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);


// TODO TOGETHER: To get all elements...Spread operator *BONUS

const [a,b,c,...rest] = alphabet;
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest); // logs D and E because that is the "rest" of the values in the const alphabet array after C


/*==============================================*/
// Using with functions


//old way
// function tellMeAbout(person) {
// 	var name = person.name;
// 	var age = person.age;
// 	console.log(name); // 'codeup'
// 	console.log(age); // 4
// }


//new way

// function tellMeAbout({name,age}){
//     console.log(name)
//     console.log(age)
// }
//
//
// const person = {
// 	name: 'Douglas',
// 	age: 38
// };

//tellMeAbout(person);


/*==============================================*/


let shape1 = {
	height: 10,
	width: 10
}

let shape2 = {
	height: 5,
	width: 5
}


//TODO: Refactor the getArea function from above using arrow syntax

let getArea = (shape1) => {return shape1.height * shape1.width}
console.log(getArea(shape1))

let getArea2 = (shape2) => {return shape2.height * shape2.width}
console.log(getArea2(shape2))