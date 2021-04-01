// Code your solution here
function findMatching(arr, str) {
    return arr.filter(e => e.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str) {
    return arr.filter(e => e.substring(0, str.length).includes(str))
}



function matchName(arr, str) {
    return arr.filter(e => e["name"] === str)
}