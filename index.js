// Code your solution here
function findMatching(array, string){
    return array.filter(x => {return x.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(array, string) {
    return array.filter(driver => {
        return driver.slice(0, string.length) === string
    })
}

function matchName(array, name) {
    return array.filter(driver => {
        return driver.name === name
    })
}
