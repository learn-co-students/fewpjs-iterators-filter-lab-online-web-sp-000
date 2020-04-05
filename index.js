// Code your solution here
function findMatching(arr, name){
   let t = arr.filter(person => person.toLowerCase() === name.toLowerCase())
   return t
}


function fuzzyMatch(arr, string){
    let match = arr.filter(word => word.startsWith(string))
    return match 
}


function matchName(arr, string){
    let o = arr.filter(obj => obj.name === string)
    return o 
}

