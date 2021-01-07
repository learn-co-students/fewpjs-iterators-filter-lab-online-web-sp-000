// Code your solution here
const drivers2 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(set, string) {
    let x = set.filter(result => {
        return string.toUpperCase() === result.toUpperCase();
    });
    return x;
}

function fuzzyMatch(set, string) {
    let x = set.filter(result => {
        return result.startsWith(string);
    });
    return x;
}

function matchName(set, string) {
    let x = set.filter(result => {
        return string === result.name;
    });
    return x;
}