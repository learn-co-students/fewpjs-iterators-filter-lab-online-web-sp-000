// Code your solution here
function findMatching(array, string) {
    return array.filter(e => e.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string) {
    function firstTwo(name) {
        return name[0] + name[1];
    }

    return array.filter(e => firstTwo(e) === string);
}

function matchName(array, string) {
    return array.filter(e => e.name === string);
}