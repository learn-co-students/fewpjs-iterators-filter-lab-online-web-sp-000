// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.substring(0, 1) === string.substring(0, 1);
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name === string;
    })
}