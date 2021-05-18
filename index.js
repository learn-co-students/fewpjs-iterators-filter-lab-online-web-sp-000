// Code your solution here
function findMatching(drivers, string) {
    let match = drivers.filter(x => x.toLowerCase() == string.toLowerCase())
    return match 
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(er => er.slice(0,2).toLowerCase().indexOf(string.toLowerCase()) !== -1)
}


function matchName(drivers, string) {
    return drivers.filter(er => er.name.toLowerCase().indexOf(string.toLowerCase()) !== -1)
}