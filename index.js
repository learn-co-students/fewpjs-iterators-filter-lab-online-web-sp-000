// Code your solution here

function findMatching(drivers, string){
    let matchedDrivers = drivers.filter(n=>{
        return n.toLowerCase() === string.toLowerCase()
    })

    return matchedDrivers
}


function fuzzyMatch (drivers, string) {
    let strLength = string.length
    let fuzzyDrivers = drivers.filter(n=>{
        return n.substring(0,strLength) === string
    })

    return fuzzyDrivers
}

function matchName(drivers, string) {
    let matchedNames = drivers.filter(n=>{
        return n.name === string
    })

    return matchedNames
}