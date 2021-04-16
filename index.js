// Code your solution here
function findMatching(drivers, matchString) {
    return drivers.filter(d => d.toLowerCase() === matchString.toLowerCase());
  }

function matchName(drivers, string) {
    let driver = drivers.filter(d => d.name === string);

    return driver;
  }

function fuzzyMatch(drivers, names) {
    let driver = drivers.filter((a) => a.startsWith(names));
    if (!!driver) {
      return driver;
    }
  }
  
