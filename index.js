// Code your solution here

function findMatching(array, ...drivers) {
    let newDrivers = drivers.map(driver => driver.toLowerCase())
    return array.filter(function(driver) { return newDrivers.includes(driver.toLowerCase())})
}

function fuzzyMatch(array, string) {
    return array.filter(function(driver) {return driver.startsWith(string)})
}

function matchName(array, name) {
    return array.filter(function(driver) {return driver.name === name})
}