// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driverArray, string) {
	const matches = driverArray.filter(driver => {
		return string.toLowerCase() === driver.toLowerCase();
	})
	return matches
}

function fuzzyMatch(driverArray, string) {
	const matches = driverArray.filter(driver => {
		return driver.substring(0, string.length) === string;
	})
	return matches;
}

function matchName(driverArray, string) {
	const matches = driverArray.filter(entry => entry.name === string)
	return matches;
}