// let findMatching = []
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

// let members = []
const fuzzyMatch = (drivers, letters) => {
    
    return drivers.filter(driver => driver.slice(0, 2) === letters)
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}