// Code your solution here


function findMatching(drivers, searchString) {
    const matchingList = drivers.filter( e => {
        return e.toLowerCase() === searchString.toLowerCase();
    })
    return matchingList;
}

function fuzzyMatch(drivers, searchSubString) {
    return drivers.filter(e => {
        return e.slice(0, searchSubString.length).toLowerCase() === searchSubString.toLowerCase()
    })
}

function matchName(drivers, searchName) {
    return drivers.filter(e => {
        return e.name === searchName
    })
}