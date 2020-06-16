// Code your solution here
function findMatching(drivers, str) {
    const result = drivers.filter(n => n.toLowerCase().includes(str.toLowerCase()))
    return result
}

function fuzzyMatch(drivers, str) {
    const result = drivers.filter(n => n.startsWith(str))
    return result
}

function matchName(drivers, str) {
    const result = drivers.filter(n => n.name === str)
    return result
}