function findMatching(array, string){
    return array.filter(e => {
        return e.toLowerCase() == string.toLowerCase()
    })
}

function fuzzyMatch(array, string){
    return array.filter(str => {
        return str[0].toLowerCase() == string [0].toLowerCase()
    })
}

function matchName(array, string){
    return array.filter(str => {
        return str.name.toLowerCase() == string.toLowerCase()
    })
}


