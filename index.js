// Code your solution here
function findMatching(array, string) {
  return array.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
  return array.filter(name => name.startsWith(string))
}

function matchName(array, string) {
  return array.filter(driver => driver.name === string);
 }
