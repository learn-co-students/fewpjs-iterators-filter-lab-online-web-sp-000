// Code your solution here
findMatching = (drivers, str) => {
  let results = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
  return results
}

function fuzzyMatch(drivers, str){
  let len = str.length;
  let result = drivers.filter(driver => driver.startsWith(str))
  return result
}

function matchName(drivers, str){
  let results = drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase())
  return results
}