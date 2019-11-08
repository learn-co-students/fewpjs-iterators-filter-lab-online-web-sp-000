// Code your solution here
const findMatching = (drivers, name) => drivers.filter(dr => dr.toLowerCase() == name.toLowerCase());


const fuzzyMatch = (drivers, str) => drivers.filter(dr => dr.slice(0, str.length) == str);

const matchName = (drivers, str) => drivers.filter(({name}) => name == str);
