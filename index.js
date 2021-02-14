// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => {
       if (driver.startsWith(str)) {
           return driver
       };
    })
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str)
}