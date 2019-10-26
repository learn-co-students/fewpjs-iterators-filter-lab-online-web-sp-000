// Code your solution here
function findMatching(array, driver) {
    let filtered = array.filter(d => d === driver || d.toLowerCase() === driver.toLowerCase())
    return filtered
}

function fuzzyMatch(array, driver) {
    return array.filter(d => d[0] === driver[0])
}

function matchName(array, driver) {
    return array.filter(d => d.name === driver)
}