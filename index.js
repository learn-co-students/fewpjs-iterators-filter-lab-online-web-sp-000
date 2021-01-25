function findMatching(driverArray, queryString) {
return driverArray.filter(driver => {
return driver.toUpperCase() === queryString.toUpperCase() ? true : false
})
}


function fuzzyMatch(drivers, prefix) {
    return drivers.filter(driver => {
        return (driver[0] + driver[1]) == prefix ? true : false
    })
}

function matchName(drivers, name) {
return drivers.filter(driver => {
    return driver.name === name ? true : false
})
}