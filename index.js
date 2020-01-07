function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.match(/^\D{2}/) == string);
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name == string);
}