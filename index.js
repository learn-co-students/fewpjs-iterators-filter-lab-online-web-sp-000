// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) !== -1;
    })
  }

function fuzzyMatch(drivers, string){
    return drivers.filter(function(el) {
        return el.substring(0, 2).toLowerCase().indexOf(string.toLowerCase()) !== -1;
    })
}


function matchName(drivers, string){
    return drivers.filter(({name}) => name.toLowerCase() === string.toLowerCase())
        
}
