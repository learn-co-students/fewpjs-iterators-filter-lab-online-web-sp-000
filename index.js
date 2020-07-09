const findMatching = function (array, driver){ // Accepts the argument of an array as well as a string for the driver name.
    let findDriver = array.filter(x => { // We use filter to check our array...
        if (x === driver || x === driver.toLowerCase()){ //... to see if our array has a value equal to an upper or lower case version of the driver's name.
            return x // If so, we return it.
        }
    })
    return findDriver // We return an array of all the results meeting the criteria.
}

const fuzzyMatch = function(drivers, string){ // Accepts same arguments as previous function...
    let findLetter = drivers.filter(x => (x[0] + x[1]).includes(string)) // Checks to see if the string entered is included in the first two characters of the element.
    return findLetter // Return results
}

const matchName = function(drivers, string){
    let findName = drivers.filter(x => x.name === string) 
    return findName
}

