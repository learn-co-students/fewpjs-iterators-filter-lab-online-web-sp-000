function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
} 

function fuzzyMatch(drivers, input) {
    return drivers.filter(driver => driver.startsWith(input))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}