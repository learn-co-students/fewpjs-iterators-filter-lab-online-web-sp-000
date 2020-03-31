// Code your solution here
function findMatching(array, string) {
   return array.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    let stringLength = string.length
    return array.filter(element => element.slice(0, stringLength) === string)
}

function matchName(array, string) {
    return array.filter(element => element.name === string)
}