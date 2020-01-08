// Code your solution here



function findMatching(drivers, name) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    let lengthOfName = letters.length
    return drivers.filter(function (driverLetters) {
        return driverLetters.slice(0, lengthOfName) === letters;
    });
}


function matchName(drivers, name) {
    return drivers.filter(function (driverName) {
        return driverName.name.toLowerCase() === name.toLowerCase();
    });
}



