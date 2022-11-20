let user = { userNAme:"Sinan Yücetepe",isActive: true}
console.log(user)
localStorage.setItem('userInfo',JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo') //take a info
userInfo = JSON.parse(userInfo)
console.log(userInfo)