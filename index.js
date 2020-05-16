// Code your solution here
function findMatching(array, name) {
    return array.filter(e => e.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, name) {
    return array.filter(e => e[0] + e[1] === name)
}

function matchName(array, name) {
    return array.filter(e => e.name === name)
}