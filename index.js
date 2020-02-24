// Code your solution here

function findMatching(drivers, name){

    let newArray = drivers.filter(function(driver){
        return driver.toLowerCase() === `${name.toLowerCase()}`
    })

    return newArray
}

function fuzzyMatch(drivers, letters){
    let newArray = drivers.filter(function(driver){
        return driver[0]+driver[1] === `${letters}`

    })

    return newArray
}

function matchName(drivers, name){
    let newArray = drivers.filter(function(driverObject){
        return driverObject.name === `${name}`    
    })

    return newArray
}