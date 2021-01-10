// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(n => {
        if(n.toLowerCase() === str.toLowerCase()) {
            return n 
        }
    });
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(n => {
        if((n.split("")[0] === str.split("")[0]) && (n.split("")[1] === str.split("")[1])) {
            return n 
        };
    }); 
}

function matchName(drivers, str) {
    return drivers.filter(n => {
        if(n.name === str) {
            return n 
        };
    }); 
}