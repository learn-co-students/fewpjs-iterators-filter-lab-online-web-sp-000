// Code your solution here
findMatching = (list, driver) => {
    return list.filter(function(name) { 
        return name.toLowerCase() === driver.toLowerCase() 
    });
}

function fuzzyMatch (list, letters) {
    let lengthOfName = letters.length;
    return list.filter(function(name) {
        return name.slice(0, lengthOfName) === letters
    })
}

function matchName(list, driver) {
    return list.filter(function(name) {
        return name.name.toLowerCase() === driver.toLowerCase()
    })
}