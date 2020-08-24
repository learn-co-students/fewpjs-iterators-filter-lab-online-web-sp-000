// Code your solution here
const findMatching = (driverArr, name) => {
    return driverArr.filter(driverName => { return name.toLowerCase() == driverName.toLowerCase()})
}

const fuzzyMatch = (list, name) => {
    let len = name.length
    return list.filter(driverName => {
        return driverName.slice(0, len) === name
    })
}

const matchName = (list, name) => {
    return list.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}