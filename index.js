// Code your solution here


function findMatching(drivers, name) {
    let results = drivers.filter(driver => { return driver.toLowerCase() === name.toLowerCase() })
    return results
}

function fuzzyMatch(drivers, letters) {
    let results = drivers.filter(driver => { return driver.slice(0, 2).toLowerCase() === letters.slice(0, 2).toLowerCase() })
    return results
}


function matchName(drivers, name) {
    let results = drivers.filter(driver => { return driver.name === name })
    return results
}