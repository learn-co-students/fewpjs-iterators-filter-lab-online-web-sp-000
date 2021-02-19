// Code your solution here
function findMatching(array, name) {
    return array.filter(el => el.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, str) {
    return array.filter(el => el.slice(0, str.length) === str);
}

function matchName(array, name) {
    return array.filter(obj => obj.name === name);
}