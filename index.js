// Code your solution here
const findMatching = (arr, name ) => arr.filter(element => element.toLowerCase() === name.toLowerCase());
const fuzzyMatch = (arr, partialName) => arr.filter(element => element.slice(0,partialName.length) === partialName);
const matchName = (obj, name) => obj.filter(element =>  element.name.toLowerCase() === name.toLowerCase());
