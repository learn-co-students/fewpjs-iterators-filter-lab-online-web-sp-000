function findMatching(driverArray, string){
    return driverArray.filter( driver => {
        
        return driver.toLowerCase() === string.toLowerCase()
    });
}

function fuzzyMatch(driverArray, string){

    return driverArray.filter( driver => {

        return driver.slice(0, string.length).toLowerCase() === string.toLowerCase()
    });
}

function matchName(driverArray, string){

    return driverArray.filter( driver => {

        return driver.name.toLowerCase() === string.toLowerCase()
    });

}