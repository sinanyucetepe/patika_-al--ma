let userName = prompt("please give your nickname")
let age = prompt("your age is:")
let info = document.querySelector("#info")
let username_age = document.querySelector("#info2")

info2.innerHTML=`your name is ${userName} \t&& your age is ${age}` 

if ( userName && age>=18) {
    info.innerHTML= "you can take license"
} else if (!userName) {
    info.innerHTML="there is no nickname", " please give your nickname"
} else if ( !(age>18) ) {
    info.innerHTML="there is no nickname or you are youger than 18"
}