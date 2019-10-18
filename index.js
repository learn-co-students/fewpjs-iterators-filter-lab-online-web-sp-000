// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arrayDrivers, name) {
    let matches = arrayDrivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return (matches ? matches : []);
}

function fuzzyMatch(arrayDrivers, name) {
    let matches = arrayDrivers.filter(driver => driver.startsWith(name))
    return (matches ? matches : []);
}

function matchName(arrayDrivers, name) {
    let matches = arrayDrivers.filter(driver => driver.name === name)
    return (matches ? matches : []);


}