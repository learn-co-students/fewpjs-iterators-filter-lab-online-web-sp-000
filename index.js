// Code your solution here
function findMatching(array, string){
  return array.filter(driver => {
    return driver.toUpperCase() == string.toUpperCase();
  })
}

function fuzzyMatch(array, string){
  return array.filter(driver => {
    return driver[0] == string[0];
  })
}

function matchName (array, string){
  return array.filter(driver => {
    return driver.name == string;
  })
}