// Code your solution here

function findMatching(drivers, name) {
    const results = drivers.filter( d => d.toLowerCase() === name.toLowerCase() );
    return results;
}

function fuzzyMatch(drivers, partialName) {
    const results = drivers.filter( d => d.substring(0, partialName.length).toLowerCase() === partialName.toLowerCase() );
    return results;
}

function matchName(drivers, name) {
    const results = drivers.filter( d => d.name.toLowerCase() === name.toLowerCase() );
    return results;
}