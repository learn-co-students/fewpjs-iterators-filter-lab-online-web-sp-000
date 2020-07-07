// Code your solution here
const findMatching = (arr, s) => {
  return arr.filter(e => {
    return e.toLowerCase() === s.toLowerCase()
  })
}

const fuzzyMatch = (arr, s) => {
  return arr.filter(e => {
    return e.startsWith(s)
  })
}

const matchName = (arr, s) => {
  return arr.filter(o => {
    return o.name === s
  })
}
