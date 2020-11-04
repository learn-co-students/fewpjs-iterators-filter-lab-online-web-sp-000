function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, beginningLetters) {
    let lengthOfName = beginningLetters.length;
    return drivers.filter(function (driverName) {
        return driverName.slice(0, lengthOfName) === beginningLetters;
    });
}

function matchName(list, name) {
    return list.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}
