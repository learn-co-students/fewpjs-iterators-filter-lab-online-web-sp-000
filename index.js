// Code your solution here
function findMatching (divers, name) {
    return divers.filter(diver => diver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch (divers, name) {
    return divers.filter(diver => name.includes(diver[0]));
}


function matchName (divers, name) {
    return divers.filter(diver => diver.name === name);
}
