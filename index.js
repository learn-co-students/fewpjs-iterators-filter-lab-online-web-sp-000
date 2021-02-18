function findMatching(drivers, string){
  let matching = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
  return matching
}

function fuzzyMatch(drivers, string){
  let beginWith = drivers.filter(driver => driver.startsWith(string))
  return beginWith
}

function matchName(drivers, string){
  let name = drivers.filter(driver => driver.name === string)
  return name
}
