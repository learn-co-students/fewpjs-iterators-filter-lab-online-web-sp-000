// Code your solution here
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, name) {
    return list.filter(function (method){
        return method.slice(0, 2) == name.slice(0, 2)
    })
}

function matchName (list, name) {
    return list.filter(function(method){
        return method.name === name
    })
}