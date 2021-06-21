function findMatching(driversArray, string) {
    let found;
let driver = driversArray.filter(name => {
     return name.toLowerCase() === string.toLowerCase()
    })
    return driver
}

function fuzzyMatch(driversArray, string) {
    let found;
    found = driversArray.filter(name => {
        return name.charAt(0) == string.charAt(0)
})
return found 
}

function matchName(driversArray, string) {
let found;
  found = driversArray.filter(driver => {
      return driver.name === string
  })
  return found 
}