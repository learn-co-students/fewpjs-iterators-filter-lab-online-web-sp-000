// Code your solution here
function findMatching(arr, target){
    return arr.filter(x => x.toUpperCase() == target.toUpperCase())
}

function fuzzyMatch(arr, target){
    return arr.filter(function(x){
        let len = target.length
        if (x.slice(0, len).toUpperCase() == target.toUpperCase()){
            return x
        }
    })
}

function matchName(obj, target){
    return obj.filter(x => x.name == target)
}