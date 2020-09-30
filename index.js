// Code your solution here

function findMatching(drivers, chofer){
  return drivers.filter(driver => driver == chofer || driver == chofer.toLowerCase())
}

function fuzzyMatch(drivers, letter){
  return drivers.filter(driver => driver.startsWith(letter)) 
}

function matchName(drivers, name){
  return drivers.filter(driver => driver.name == name)
}