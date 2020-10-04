// Code your solution here

function findMatching(arr, str) {
	return arr.filter(objName => {
		return objName.toLowerCase() == str.toLowerCase();
	})
}

function fuzzyMatch (arr, letters) {
	let length = letters.length;
	return arr.filter(objName => {
		return objName.slice(0, length) === letters;
	});
}

function matchName (arr, name) {
	return arr.filter(driver => {
		return driver.name.toLowerCase() === name.toLowerCase();
	})
}