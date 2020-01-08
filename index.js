// Code your solution here
function findingMatch(drivers, search){
    return drivers.filter(driver => driver.toLowerCase() === search.toLowerCase());
}

function fuzzyMatch(drivers, search){
    return drivers.filter(function(driver){
        let match = true;
        let index = 0;
        for (const letter of search){
            if (!(letter === driver[index])) {
                match = false;
            }
            index++;
        }
        return match;
    })
}

function matchName(drivers, search){
    return drivers.filter(function(driver){
        // console.log(driver.name);
        // console.log(search);    
        return driver.name === search;
    })
}