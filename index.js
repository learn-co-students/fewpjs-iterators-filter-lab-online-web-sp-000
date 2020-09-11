function findMatching (drivers, searchString) {
    const result = drivers.filter(driver => driver.toLowerCase() == searchString.toLowerCase());
    return result
}

function fuzzyMatch (drivers, searchString) {
    const result = drivers.filter(driver => driver.toLowerCase().substring(0,searchString.length) == searchString.toLowerCase());
    return result
}

function matchName (drivers, searchString) {
    const result = drivers.filter(driver => driver.name == searchString);
    return result
}