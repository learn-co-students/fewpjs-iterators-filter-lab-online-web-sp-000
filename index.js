// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(x => {return x.toUpperCase() === string.toUpperCase()})
};

function fuzzyMatch(drivers, string) {
    return drivers.filter(x => {
        let exp = new RegExp("^" + string + ".*");
        return exp.test(x);
    })
};

function matchName(drivers, string) {
    return drivers.filter(x=> {return x.name === string})
};