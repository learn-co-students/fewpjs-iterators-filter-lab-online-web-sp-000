// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(driver => string.toLowerCase() === driver.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => string.charAt(0) === d.charAt(0))
}

function matchName(drivers, string) {
    return drivers.filter(d => string === d.name)
}