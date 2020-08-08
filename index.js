// Code your solution here
console.log("hey")

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase() )
}

function fuzzyMatch(list, partialName){
    let lengthOfName = partialName.length
 return  list.filter(driverName => driverName.slice(0,lengthOfName) === partialName)
    
}

function matchName(drivers,name){
    return drivers.filter(driver => driver.name === name )
}