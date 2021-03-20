// returns all drivers in driversArray, whose names match matchingString- case insensitive
function findMatching(driversArray, matchingString) {
    let matches = driversArray.filter(i => i.toLowerCase() == matchingString.toLowerCase())
    return matches
}

// returns all drivers whose names begin w/ letters from string
function fuzzyMatch (driversArray, matchingString) {
    let matches = driversArray.filter(i => i[0] == matchingString[0])
    return matches
}

// each element of driversArray is object that has name. return each element where name matches
function matchName (driversArray, matchingString) {
    let matches = driversArray.filter(i => i.name == matchingString)
    return matches
}