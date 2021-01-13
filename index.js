// Code your solution here
const findMatching = function(drivers, name) {
    return drivers.filter(driver => {
      return driver.toLowerCase() === name.toLowerCase();
    });
}


const fuzzyMatch = function (drivers, partialName) {
    let nameChecker = partialName.length
    return drivers.filter(driver => {
         return driver.slice(0, nameChecker) === partialName;
    })
}

const matchName = function(drivers, name) {
    return drivers.filter(driver => { 
        return driver.name === name;
    })
}