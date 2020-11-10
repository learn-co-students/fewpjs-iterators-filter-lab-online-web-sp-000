// Code your solution here
function findMatching(arr, name) {
  return arr.filter(x => x.toLowerCase() === name.toLowerCase())
};

function fuzzyMatch(arr, name) {
  return arr.filter(x => x.slice(0, name.length).includes(name))
};

function matchName(arr, string) {
  return arr.filter(x => x.name === string);
};
