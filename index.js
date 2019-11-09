// Code your solution here
const findMatching = ( drivers, name ) =>
  drivers.filter( x => x.toLowerCase() === name.toLowerCase() )

const fuzzyMatch = ( drivers, str ) =>
  drivers.filter( x => x.startsWith( str ))

const matchName = ( drivers, str ) =>
  drivers.filter( x => x.name === str )
