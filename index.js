function findMatching(driversArray, string){
    return driversArray.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    });
}

function fuzzyMatch(driversArray, string){
    return driversArray.filter(driver => {
        return driver.slice(0, string.length).toLowerCase() === string.toLowerCase()
    });
}

function matchName(driversArray, string){
    return driversArray.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase()
    });
}