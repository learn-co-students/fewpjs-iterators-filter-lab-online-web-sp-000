function findMatching(array, name) {
    return array.filter(n => {
        return n.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(array, name) {
    return array.filter(n => {
        return n.charAt(0) === name.charAt(0)
    })
}

function matchName(array, string) {
    return array.filter(n => {
        return n.name === string 
    })
    //each element of array is an object with a name property
    //return each element whose name matches string provided
}