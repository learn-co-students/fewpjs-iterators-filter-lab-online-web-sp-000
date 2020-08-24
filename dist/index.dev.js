"use strict";

// Code your solution here
var findMatching = function findMatching(driverArr, name) {
  return driverArr.filter(function (driverName) {
    return name.toLowerCase() == driverName.toLowerCase();
  });
};

var fuzzyMatch = function fuzzyMatch(list, name) {
  var len = name.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, len) === name;
  });
};

var matchName = function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};