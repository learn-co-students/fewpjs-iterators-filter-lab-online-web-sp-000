// Code your solution here

function findMatching(drivers, name) {
    let results = drivers.filter((driver) => 
        driver.toLowerCase() === name.toLowerCase()
    )
    return results;
}

function fuzzyMatch(drivers, portion) {
    let beginning = portion.length
    let results = drivers.filter((driver) => driver.slice(0, beginning) === portion);
    return results
}

function matchName(drivers, name) {
    let drivers1 = drivers.filter((driver => driver.name === name))
    return drivers1
}