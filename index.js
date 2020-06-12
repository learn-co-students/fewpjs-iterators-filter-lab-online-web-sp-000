// Code your solution here
function findMatching(drivers, string){
let match = [];
  return match = drivers.filter(n => {
    return n.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(drivers, string){
  let match = [];
    return match = drivers.filter(n => {
      return n.slice(0, string.length) == string;
    });
}

function matchName(drivers, string){
  let match = [];
    return match = drivers.filter(n =>{
      if (n.name === string){
        return n;
      }
    });
}
