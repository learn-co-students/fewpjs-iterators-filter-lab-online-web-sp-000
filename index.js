// Code your solution here


function findMatching(arr, str){
    return arr.filter(e=> e.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str){
    return arr.filter( e => e.slice(0, str.length) === str)
}

function matchName(arr, str){
    return arr.filter(e=> e.name == str)
}
