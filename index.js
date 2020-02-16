// Code your solution here
 function findMatching (drivers, string) {
     return drivers.filter(driverName => {
      return driverName.toLowerCase() === string.toLowerCase();
    });
  }




function fuzzyMatch(drivers, string){
    let name = string.length;
    return drivers.filter(driverName =>{
      return driverName.slice(0, name) === string;
    });
    
}

function matchName (drivers, string){
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase();
      });
    }