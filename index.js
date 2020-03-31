// Code your solution here
function findMatching(array, string) {
   return array.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(element => element.charAt(0) === string.charAt(0))
}

function matchName(array, string) {
    return array.filter(element => element.name === string)
}