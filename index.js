const findMatching = function(drivers, target) {
    return drivers.filter(driver => {
        return driver.toLowerCase() == target.toLowerCase();
    })
}

const fuzzyMatch = function(drivers, target) {
    return drivers.filter(driver =>{
        let result = true;
        target.split('').forEach(function(letter, i){
            if (letter.toLowerCase() !== driver[i].toLowerCase()) {
                return result = false;
            }
        })
        return result
    })
}

const matchName = function (drivers, name) {
    return drivers.filter( driver => {
        return driver.name.toLowerCase() == name.toLowerCase()
    })
}