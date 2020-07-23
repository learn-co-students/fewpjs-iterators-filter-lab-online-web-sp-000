// Code your solution here

function findMatching(src, query) {
    return src.filter(element => element.toUpperCase() === query.toUpperCase())
}

function fuzzyMatch(src, query) {
    return src.filter(element => element.slice(0, query.length).toUpperCase() === query.toUpperCase())
}

function matchName(src, query) {
    return src.filter(element => element.name.toUpperCase() === query.toUpperCase())
}