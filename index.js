// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name => name.substring(0, string.length).toLowerCase() === string.toLowerCase())
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}