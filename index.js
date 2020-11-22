function findMatching(drivers, string){
    let driversArray = [];
    return driversArray = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string){
    let driversArray = [];
    return driversArray = drivers.filter(driver => driver.startsWith(string));
}

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }