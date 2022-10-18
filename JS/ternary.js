let userName = prompt("Please give your name ")
let info = document.querySelector("#info")

info.innerHTML =`${userName ? userName : "there is no username sorry :("}`
