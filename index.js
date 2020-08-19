// Code your solution here

const findMatching = (drivers, name) => {

  // 1) returns all drivers that match the passed in name
  // 2) returns matching drivers if case does not match but letters do
  // 3) returns an empty array if there is no match

  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })

}


const fuzzyMatch = (drivers, searchString) => {
  // 4) returns a driver if beginning provided letters match
  // 5) does not return drivers if only middle or ending letters match
  // 6) does not return drivers if only middle or ending letters match
  return drivers.filter(driver => {
    return driver.toLowerCase().startsWith(searchString.toLowerCase())
  })
}

const matchName = (drivers, name) => {
  //7) accesses the data structure to check if name matches
  return drivers.filter(driver => {
    return driver.name === name
  })
}