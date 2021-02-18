function findMatching(drivers, str){
	return drivers.filter(driver => {
		return driver.toLowerCase() === str.toLowerCase()
	})
}

function fuzzyMatch(drivers, str){
	let length = str.length
	return drivers.filter(driver => {
		return driver.slice(0, length).toLowerCase() === str.toLowerCase()
	})
}

function matchName(drivers, str){
	return drivers.filter( driver => {
		return driver.name === str
	})
}