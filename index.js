// Code your solution here
function findMatching(driversArray, string) {
  return driversArray.filter( driver => {
    if (driver.toLowerCase() === string.toLowerCase()) {
      return driver;
    };
  });
};

function fuzzyMatch(driversArray, string) {
  return driversArray.filter(driver => {
    let stringCount = string.length
    if (driver.slice(0, stringCount) === string) {
      return driver;
    };
  });
};


function matchName(driversArray, string) {
  return driversArray.filter(driver => {
    if (driver.name === string) {
      return driver;
    };
  });
};
