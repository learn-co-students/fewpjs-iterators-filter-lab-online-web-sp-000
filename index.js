function findMatching(array, match){
  return array.filter(element => {return element.toLowerCase() == match.toLowerCase()})
}
function fuzzyMatch(array, match){
  return array.filter(element => {return element.slice(0, match.length) == match})
}
function matchName(drivers, match){
  return drivers.filter(driver => {return driver.name == match})
}
