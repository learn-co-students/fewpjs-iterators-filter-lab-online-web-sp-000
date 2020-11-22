// Code your solution here

//1.
// Write findMatching- This function takes an array of drivers and a string as arguments,
//and returns the matching list of drivers. The function should be case insensitive.
findMatching = drivers => {
  let result = drivers.filter(name => name.result === name)
  return !!result ? result : []
}
