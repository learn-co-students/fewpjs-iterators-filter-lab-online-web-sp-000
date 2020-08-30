// Code your solution here
function findMatching(array, target){
  return array.filter(driver => driver.toLowerCase()===target.toLowerCase());
}

function fuzzyMatch(array, target){
  return array.filter(driver => driver.slice(0, 2) === target);
}

function matchName(array, target){
  return array.filter(driver => driver.name === target);
}
