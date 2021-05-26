// Code your solution here
function findMatching(arr, str) {
    return arr.filter(item => item.toLowerCase() == str.toLowerCase())
}

function fuzzyMatch(arr, str) {
    return arr.filter(item => item.startsWith(str))
}

function matchName(arr, str) {
    return arr.filter(item => item.name == str)
}