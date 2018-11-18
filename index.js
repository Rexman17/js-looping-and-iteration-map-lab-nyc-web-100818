// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lowerCased = [];
  drivers.map(function(driver) {
    lowerCased.push(driver.toLowerCase());
  })
  return lowerCased;
}

function nameToAttributes(drivers) {

const arrayofObjects = [];

drivers.map(function(driver) {
  const firstName = driver.split(" ")[0];
  const lastName = driver.split(" ")[1];
  arrayofObjects.push({firstName: firstName, lastName: lastName});
})
  return arrayofObjects;
}

function attributesToPhrase(drivers) {
  const phrases = [];
  drivers.map(function(driver) {
    phrases.push(`${driver.name} is from ${driver.hometown}`);
  });
  return phrases;
}

// this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".
