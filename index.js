// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
   if( driver.toLowerCase() === string.toLowerCase() ) {
     return true;
   }
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver){
    if( driver.slice(0, string.length) === string) {
      return true;
    }
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    if (driver.name === string) {
      return true;
    }
  })

}