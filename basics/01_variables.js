const accountId = 144553
let accountEmail = "lakshay@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  // undefined

// accountId = 2  // not allowed

accountEmail = "ls@ls.com"
accountPassword = "445465464"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope ad functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
