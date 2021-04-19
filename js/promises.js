// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
"use strict"

function getUsernames(username) {
    let promiseUser = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${promiseToken}`}})
        promiseUser.then(response => response.json())
            .then(events => console.log(events[0]))
}
(getUsernames('vpnoriega'))


/** Notes on what is going on: */

/** store the information you are fetching in a var. Then the first parameter is the API: */
// function getUsernames(username) {
//     let promiseUser = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${promiseToken}`}})

/** pulls the (info) the list of commits and puts it into a json file for us to have access to: */
    //promiseUser.then(response => response.json())

/** return the events that you need to log: */
        // .then(events => console.log(events[0]))

//}

// console.log(getUsernames('vpnoriega'))

