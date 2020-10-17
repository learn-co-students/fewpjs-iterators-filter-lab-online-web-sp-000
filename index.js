// Code your solution here


function findMatching(drivers, driver){
    let matchingDrivers = drivers.filter(d => {
        return d.toLowerCase() === driver.toLowerCase();
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, driver){
    let fuzzyDrivers = drivers.filter(d => {
        return d.slice(0, 2).toLowerCase() === driver.slice(0, 2).toLowerCase();
    });
    return fuzzyDrivers;    

}

function matchName(drivers, driver){
    let matchedName = drivers.filter(d => {
        if (d.name.toLowerCase() === driver.toLowerCase()){
            return d;
        }
    });
    return matchedName;  
}