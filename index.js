//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, string) => {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

const fuzzyMatch = (drivers, string) => {
       return drivers.filter(driver => {
         let stringLength = string.length
         return driver.slice(0, stringLength) === string
    })
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase()
    })
}
