// Code your solution here

function findMatching(array, name) {
    return array.filter(arrayName => { 
        return arrayName == name || arrayName == name.toLowerCase(); 
    })
    
}

function fuzzyMatch(array, name) {
    return array.filter(arrayName => {
        return arrayName.slice(0, name.length) === name
    })
}

function matchName(array, name) {
    return array.filter( arrayName => {
        return arrayName.name === name
    })
}