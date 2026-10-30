const accountID = 43888
let accountEmail = "Divya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // possible but prefer not to use
let accountState; // undefined variable

accountEmail = "houwe@hoip"

accountPassword = "4321"

accountCity = "Haryana"

// accountID = 2  // not allowed

console.log(accountID);

/*
prefer not to use var because of issue in block scope and functional scope.
*/


console.table([accountCity, accountEmail, accountPassword, accountID, accountState])