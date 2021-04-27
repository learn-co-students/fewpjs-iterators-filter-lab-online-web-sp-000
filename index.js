

function findMatching(drivers, string) {
    return drivers.filter(x => x.toLowerCase().includes(string.toLowerCase()));

}

function fuzzyMatch(drivers, string) {
    return drivers.filter(x => string.startsWith(x[0]))
}

function matchName(drivers, string) {
    return drivers.filter(x => x.name === string)
}
