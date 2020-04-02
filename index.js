// Code your solution here
function fuzzyMatch(array, string) {
    let checkLetter = string[0]
    return array.filter(name => name[0] === checkLetter)
}

function matchName(array, checkName) {
    return array.filter(object => object["name"] === checkName)
}

function findMatching(array, checkName) {
    return array.filter(name => name.toLowerCase() === checkName.toLowerCase())
}