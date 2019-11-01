// How .filter() works:

// let arr = [1, 2, 3, 4, 5, 6];
// let even = [];

// for(var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) even.push(arr[i]);
// }
// even = [2,4,6]

//-----------------------------------------

// .filter()

// let even = arr.filter(n => {
//   return n % 2 === 0;
// });
// even = [2,4,6]

//-----------------------------------------

// You'll be writing three functions:
//
// 1. Write a Function To Case-insensitively Match strings
//
// findMatching()
// * takes an array of drivers and a string as arguments,
// * returns the matching list of drivers.
// * the function should be case insensitive.
//
// 1st Attempt
// function findMatching(driversArray, name) {
//     return driversArray.filter(driver => {
//         let listOfDrivers = [];
//
//         if (driver.toUpperCase() === name.toUpperCase()) {
//             return listOfDrivers.push(driversArray);
//         }
//         return listOfDrivers;
//
//     });
// }

function findMatching(driversArray, name) {
    return driversArray.filter(driver => name ? driver.toUpperCase() === name.toUpperCase() : []);
}

// 2. Write a Function To Partially Match Substrings
//
// fuzzyMatch()
// * takes an array of drivers and a string as arguments for querying the array,
// * returns all drivers whose names begin with the provided letters.

//
// function fuzzyMatch(driversArray, name) {
//     return driversArray.filter(driver => name ? driver[0] === name.split(' ')[0]);
//     return driversArray.filter(driver => name ? driver === name.unshift());
// }

function fuzzyMatch(driversArray, name) {
    let firstLetterOfName = name[0];

    return driversArray.filter(driver => {
        let firstLetterOfDriver = driver[0];

        if (firstLetterOfName === firstLetterOfDriver) {
            return name;
        }
    });
}

// 3. Write a Function To Match object Values To a Provided string
//
// matchName()
// * takes an array of drivers and a string as arguments.
//
// In this function, each element of the drivers array
// is a JavaScript object that has a property of name.
//
// The function should return each element whose name property
// matches the provided string argument.

function matchName(driversArrayOfObjects, name) {
    return driversArrayOfObjects.filter(driverObj => name ? driverObj.name === name : []);
}
//
// Conclusion
// The filter() method returns a new array
// created from all elements in the original array
// that meet certain conditions.

// When we use methods like filter(),
// we work directly with the current value,
// instead of accessing it through an index (i.e array[i]),
// avoid mutation of the original array (minimizing side-effects),
// and there's no need to manage a for loop with an empty array to push values into.
