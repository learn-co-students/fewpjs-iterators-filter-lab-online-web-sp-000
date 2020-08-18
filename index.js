function findMatching(drivers, string) {
    return drivers.filter(s => {
        return s.toUpperCase() === string.toUpperCase();
    })
}

function fuzzyMatch(drivers, string) {
    let lengthOfName = string.length;
    return drivers.filter(s => {
        return s.slice(0, lengthOfName) === string
    })
}

function matchName(drivers, string) {
    return drivers.filter(s => {
        return s.name === string
    })
}