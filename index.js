// Code your solution here
function findMatching(array, name){
  return array.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, name){
  return array.filter(driver => driver[0] === name[0] && driver[1] === name[1])
}

function matchName(array, name){
  return array.filter(driver => driver.name === name)
}
