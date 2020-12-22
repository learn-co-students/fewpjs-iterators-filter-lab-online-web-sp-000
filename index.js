// Code your solution here

/*
findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match
*/
const findMatching = (drivers, name) => {
  let matchedName = drivers.filter(driverName => 
    driverName.toLowerCase() === name.toLowerCase())
  return matchedName
}

/*
fuzzyMatch()
      1) returns a driver if beginning provided letters match
      2) does not return drivers if only middle or ending letters match
      3) does not return drivers if only middle or ending letters match
*/
const fuzzyMatch = (drivers, letters) => {
  let matchedLetters = drivers.filter(name => {
    if (name.substring(0, 2) === letters) {
      return name
    } 
  })
  return matchedLetters
}