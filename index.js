// Code your solution here
function findMatching(arr, str) {
    return arr.filter(function(driver) {
        return driver.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(function(driver) {
        return driver[0] === str[0];
    });
}

function matchName(drivers, str) {
    return drivers.filter(function(driver) {
        return driver.name === str;
    });
}