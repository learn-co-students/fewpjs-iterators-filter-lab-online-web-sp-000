// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver => driver.toUpperCase() == string.toUpperCase())
}

function fuzzyMatch(drivers, input){
    return drivers.filter(driver => driver.slice(0, input.length) == input)
}

function matchName(drivers, input){
    return drivers.filter(driver => driver.name === input )
}