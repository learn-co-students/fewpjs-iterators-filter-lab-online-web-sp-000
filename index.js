// Code your solution here
function findMatching(array, queryString) {
    return array.filter( function(element) { return element.toLowerCase() === queryString.toLowerCase() })
}

function fuzzyMatch(array, queryString) {
    return array.filter( function(element) { 
        return element.toLowerCase().slice(0, queryString.length) === queryString.toLowerCase() 
    })

}

function matchName(arrayOfObjects, queryString) {
    return arrayOfObjects.filter( function(element) { return element.name.toLowerCase() === queryString.toLowerCase() })

}
