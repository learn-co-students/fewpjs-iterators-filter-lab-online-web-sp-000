// Code your solution here
function findMatching(arr, string) {
    return arr.filter(d => d.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(arr, string) {
    return arr.filter(d => d.slice(0, string.length) === string);
}

function matchName(arr, string) {
    return arr.filter(d => d.name === string);
}