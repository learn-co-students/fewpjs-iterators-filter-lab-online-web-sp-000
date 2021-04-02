// let even = arr.filter(n => {
    // return n % 2 === 0;
//});

function findMatching(drivers, driverName){
    let match = drivers.filter(name => name.toUpperCase() === driverName.toUpperCase());
    if (match) {return match};
}

function fuzzyMatch(drivers, driverName){
    let match = drivers.filter(name => name[0] === driverName[0] && name[1] === driverName[1])
    if (match) {return match};
}

function matchName(drivers, driverName){
    let match = drivers.filter(({ name }) => name === driverName);
    if (match) {return match};
}

