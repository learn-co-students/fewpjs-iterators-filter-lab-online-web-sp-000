function findMatching(drivers, str) {
	return drivers.filter(objName => {
		return objName.toLowerCase() == str.toLowerCase();
	})
}

function fuzzyMatch (drivers, letters) {
	let length = letters.length;
	return drivers.filter(objName => {
		return objName.slice(0, length) === letters;
	});
}

function matchName (drivers, name) {
	return drivers.filter(driver => {
		return driver.name.toLowerCase() === name.toLowerCase();
	})
}