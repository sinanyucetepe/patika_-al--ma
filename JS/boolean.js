let isActive = false 
isActive = true
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11")// true
Boolean("") //false

userName="user"
console.log("do u have username ", Boolean(userName))

Boolean(0)//false
Boolean(-0)// false
Boolean(-0.1)//true
Boolean(userName.length >0) // true

