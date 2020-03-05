// Code your solution here
function findMatching(array, string) {
    return array.filter(e => {
        return e === string || e === string.toLowerCase();
    });
}

function fuzzyMatch(array, string) {
    return array.filter(e => {
        return e.charAt(0) === string.charAt(0)
    })
}

function matchName(array, string) {
    return array.filter(e => {
        return e.name === string
    })
}