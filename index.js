function findMatching(array, string) {
    return array.filter(function (driver) {
      return driver.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(array, string) {
    return array.filter(function (driver) {
        return ((driver.charAt(0) + driver.charAt(1)) === (string.charAt(0) + string.charAt(1)))
    })
}

function matchName(array, string) {
    return array.filter(function (object) {
        return object.name === string
    })
}


