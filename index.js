// Code your solution here

function findMatching(array, driver){
    let filter = array.filter(d => d === driver || d.toLowerCase() === driver.toLowerCase())
    return filter;
}

function fuzzyMatch(array, driver){
    return array.filter(m => m[0] === driver[0])

}

function matchName( array, driver){
    return array.filter(m => m.name === driver)
}