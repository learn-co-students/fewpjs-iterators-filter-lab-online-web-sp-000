// Code your solution here
function findMatching(array, string){
    return array.filter(n => {
        return n.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(array, string){
    let nameLength = string.length;
    return array.filter(n => {
        return n.slice(0, nameLength) === string; 
    })
}

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }