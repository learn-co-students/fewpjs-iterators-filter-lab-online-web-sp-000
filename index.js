function findMatching(array, name) {
    return array.filter(person => {
       return person.toLowerCase() == name.toLowerCase()
    })  
}

function fuzzyMatch(array, name) {
    return array.filter(person => {
        let x = name.split("")
        let y = person.split("")
        if (x.length === 2) {
       return  person[x.length -1] === x[x.length -1] && person[0] === x[0]
        } else {
           person[x.length -1] === x[x.length -1]
        }
    })
}

function matchName(array, name) {
    return array.filter(person => {
        return person.name === name
    })
}