// Code your solution here


function findMatching(ary, name) {
   return ary.filter(d =>  d.toUpperCase() == name.toUpperCase())
}

function fuzzyMatch(ary, str) {
return ary.filter(n => n.slice(0, str.length) == str)
}

function matchName(ary, name){
return ary.filter(d => d.name == name)
}
