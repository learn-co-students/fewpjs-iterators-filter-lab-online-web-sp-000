// Code your solution here
findMatching = (drivers, str) => {
    return drivers.filter(d => d.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(d => d.startsWith(str) === str.startsWith(str));
}

function matchName(drivers, str) {
    return drivers.filter(d => d.name == str);
}