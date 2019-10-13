// Code your solution here
function findMatching(driversList, name){
    return driversList.filter(function(driverName){
        return driverName.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch (driversList, partialName) {
    let lengthOfName = partialName.length;
    return driversList.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }
  
  function matchName (driversList, name) {
    return driversList.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }