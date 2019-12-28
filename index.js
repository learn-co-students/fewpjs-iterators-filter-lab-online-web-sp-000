// Code your solution here

//This function takes an array of drivers and a string as arguments, and returns the matching list of drivers.
//The function should be case insensitive.
function findMatching(arr, string) {
    return arr.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase();
    })
};

//This function takes an array of drivers and a string as arguments for querying the array, and returns
//all drivers whose names begin with the provided letters.
function fuzzyMatch(arr, string) {
    return arr.filter(function(driver) {
        return driver[0] === string[0];
    })
};

//This function takes an array of drivers and a string as arguments. In this function, each element of the
//drivers array is a JavaScript object that has a property of name. The function should return each element
//whose name property matches the provided string argument.
function matchName(arr, string) {
    return arr.filter(function (driver) {
        return driver.name === string;
    })
};