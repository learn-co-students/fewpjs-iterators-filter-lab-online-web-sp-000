// Code your solution here
function findMatching(drivers, txt){
    return drivers.filter(driver => driver.toUpperCase() === txt.toUpperCase())
}

function fuzzyMatch(drivers, txt){
    return drivers.filter(driver => driver.startsWith(txt))
}

function matchName(drivers, txt){
    return drivers.filter(driver => driver.name === txt)
}