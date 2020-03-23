const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
const findMatching = (driversArr, queryStr) => {
   const matches = driversArr.filter(driver => driver.toLowerCase() === queryStr.toLowerCase())
   return matches
}

// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
const fuzzyMatch = (driversArr, queryStr) => {
   const matches = driversArr.filter(driver => {
      const queryRegexStr = `^${queryStr}`
      const queryRegex = new RegExp(queryRegexStr)
      const found = driver.search(queryRegex)
      //search method above returns 0 if it is found and -1 if not found
      if (found === 0) {
         return true
      } else {
         return false
      }
   })
   return matches
}
// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
const matchName = (driversArr, queryStr) => {
   const matches = driversArr.filter(driverObj => driverObj.name === queryStr)
   return matches
}
