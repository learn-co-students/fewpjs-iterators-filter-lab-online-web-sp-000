// Code your solution here
function findMatching(arr, str) {
    return arr.filter(value => { return value === str || value === str.toLowerCase()})
}

function fuzzyMatch(arr, str) {
    return arr.filter(name => !name.search(str))
}

function matchName(arr, str) {
    return arr.filter(value => value.name === str)
}