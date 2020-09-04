// Code your solution here
function findMatching(arr, str) {
    let match = arr.filter(driver => {
        return driver.toLowerCase() === str.toLowerCase();
    });
    return match;
}

function fuzzyMatch(arr, str) {
    let matching = [];
    arr.forEach(driver => {
        let i = 0;
        let flag = 0;
        let goodStr = str.toLowerCase().split("");
        let goodDriver = driver.toLowerCase().split("");
        while (i < goodStr.length) {
            if (goodDriver[i] === goodStr[i]) {
                flag += 1;
            }
            if (flag === goodStr.length) {
                matching.push(driver);
            }
            i++
        }
    });
    return matching
}

function matchName(drivers, str) {
    return drivers.filter(driver => {
        return driver.name === str;
    });
}

