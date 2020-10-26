// Code your solution here
function findMatching(arg,sel){
    return arg.filter(s => s.toLowerCase() == sel.toLowerCase());
}

function fuzzyMatch(arg,sel){
    return arg.filter(s => s.charAt(0) == sel.charAt(0));
}

function matchName(arg,sel){
    return arg.filter(s => s.name == sel);
}