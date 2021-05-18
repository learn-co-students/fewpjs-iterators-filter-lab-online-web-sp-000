// Code your solution here

function findMatching (drivers, str) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === str.toLowerCase();
    }) 
}


function fuzzyMatch(drivers, str) {
    return drivers.filter(function (driver) {
        return driver.substring(0, 2) === str
    })
}


function matchName(drivers, str) {
    return drivers.filter(function (driver) {
        return driver.name === str
    })
}

