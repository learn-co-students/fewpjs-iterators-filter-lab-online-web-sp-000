// Code your solution here
function findMatching(drivers, driver) {

    return drivers.filter(function (el, i) {
            
            return el.toLowerCase() === driver.toLowerCase()
    })
}

function fuzzyMatch(drivers, driver) {
    return drivers.filter(function (el) {
        let elSplit = el.split('')
        let driverSplit = driver.split('')
        let driverBoolean = false
        for (let i = 0; i < driverSplit.length; i++) {
            if (driverSplit[i] === elSplit[i]) {
                driverBoolean = true
            }
        }
        return driverBoolean
    })
}

function matchName(drivers, driver) {
    return drivers.filter( function (el) {
        return el.name === driver
    })
}