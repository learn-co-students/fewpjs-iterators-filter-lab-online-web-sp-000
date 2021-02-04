// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(function (driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters){
    let providedLength = letters.length;
    return drivers.filter(function(driverName){
        return driverName.slice(0, providedLength) === letters;
    });
}

function matchName(drivers, givenName){
    return drivers.filter(function(driverObj){
        return driverObj.name.toLowerCase() === givenName.toLowerCase();
    });
}