// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, string){
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === string.toLowerCase()
    })
    }

 
function fuzzyMatch (drivers, string) {
    let firstLetter = drivers.filter(drivers => drivers.slice(0, string.length) === string);
    return firstLetter;
}

function matchName (array, name) {
    return array.filter(driver => driver.name === name);
 }