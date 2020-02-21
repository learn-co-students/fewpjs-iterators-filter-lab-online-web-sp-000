// Code your solution here


function findMatching(list, name){
return list.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(list, partialName) {
    return list.filter(driverName => driverName.slice(0, partialName.length) === partialName);
}

function matchName(list, name) {
    return list.filter(driverName => driverName.name === name);
}