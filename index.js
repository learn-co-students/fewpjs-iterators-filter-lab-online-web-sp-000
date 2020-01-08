// Code your solution here
function findMatching(array, string){
    let newList = array.filter(function(driver){ return driver.toLowerCase() === string.toLowerCase()})
    return newList;
}

function fuzzyMatch(array, partialString){
    let newArray = 
        array.filter(function(ele){
            return ele.search(partialString) === 0
        })
    
    return newArray
}

function matchName(array, name){
    let newArray = 
    array.filter(function(ele){
        return ele.name === name
    })
    return newArray
}