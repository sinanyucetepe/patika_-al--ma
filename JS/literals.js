let username = "sinan"
console.log(username)

const DOMAIN = "kodluyoruz.org"
username = "alper"
console.log(username)
let email = username+"@" + DOMAIN

//console.log("Merhaba",username, "Sitemize hosgeldin","mail adresin : ",email)

let info = `Hello ${username} Wolcome our site.. your mail adress : ${email}

length of your mail adress: ${email.length}
your debt ${(2+5)*2}
hour of day date : ${new Date().getHours()}

your short name : ${username[0]}.
`

console.log(info)