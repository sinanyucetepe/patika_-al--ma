//let h2=document.getElementsByTagName('h2')
let title= document.getElementById('title')
title.innerHTML = "changing information"
console.log(title.innerHTML)

//let link=document.querySelector("ul#list>li>a")
//console.log(link.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML+=" has been changed"
console.log(link.innerHTML)
link.style.color = "red"
link.classList.add("btn")