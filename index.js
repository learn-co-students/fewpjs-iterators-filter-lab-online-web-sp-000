// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(drivers => drivers.toLowerCase() == string.toLowerCase());
};

function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }

function matchName(drivers, string) {
    return drivers.filter(drivers => drivers["name"].toLowerCase() == string.toLowerCase())
}