// Code your solution here
const findMatching = (drivers, letter) => {
   return drivers.filter(function (driverName) {
       return driverName.toLowerCase() === letter.toLowerCase();
   })
}

const fuzzyMatch = (drivers, name) => {
    let nameLength = name.length;
    return drivers.filter(function (driverName){
        return driverName.slice(0, nameLength) === name;
    })
}

const matchName = (drivers, name) => {
    return drivers.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}