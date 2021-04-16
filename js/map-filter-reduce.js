const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users)

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array:

let threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages)


// 3. Use .map to create an array of strings where each element is a user's email address:

let arrStrings = users.map(user =>user.email);
console.log(arrStrings)


// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average:

let sumYears = users.reduce((years,person) =>{
    return years + person.yearsOfExperience;
},0);
console.log(sumYears);


// 4b. Get the average:
let averageYears = sumYears/5
console.log(averageYears)


// 5. Use .reduce to get the longest email from the list of users.

let theWinner = users.reduce(function(longestEmail,user) {
    if (longestEmail.length < user.email.length){
    longestEmail = user.email    //single = is an assignment
    }
    return longestEmail;
    }, '');

console.log(theWinner);


// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce((firstName,person) =>{
return firstName + person.name +',';
}, '')

console.log(`The user names are ${userNames}`)


//BONUS: Use .reduce to get the unique list of languages from the list of users:

let userLanguages = users.reduce(function (language, person) {
    if (!language.includes(person)) {
        language.push(person)
    }
    return language
}, [])

console.log(userLanguages);