// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driverName => driverName.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string) {
    // returns a driver if beginning provided letters match
    // does not return drivers if only middle or ending letters match
    // does not return drivers if only middle or ending letters match
    let stringLength = string.length;
    return drivers.filter(driverName => driverName.slice(0, stringLength) === string)
}

function matchName(drivers, string) {
    return drivers.filter(driverObject => driverObject.name === string)
}
