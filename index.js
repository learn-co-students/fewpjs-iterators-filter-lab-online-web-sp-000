// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    let lengthOfSearch = string.length

    return drivers.filter(function (driver) {
        let shortDriver = driver.slice(0, lengthOfSearch)
        return shortDriver.toLowerCase() === string.toLowerCase()
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}

