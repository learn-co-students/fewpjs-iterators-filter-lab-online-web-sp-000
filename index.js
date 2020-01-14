// Code your solution here
function findMatching(arr, driver) {
    return arr.filter(e => e.toUpperCase() == driver.toUpperCase())
}

function fuzzyMatch(arr, letters) {
    return arr.filter(e => e.startsWith(letters))
}

function matchName(arr, name) {
    return arr.filter(e => e.name === name)
}
