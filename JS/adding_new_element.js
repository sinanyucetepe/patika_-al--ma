let lastchild = document.querySelector("ul#list>li:last-child")
console.log(lastchild)
lastchild.innerHTML = "the last elements has been changed"

let firstchild = document.querySelector("ul#list>li:first-child")
firstchild.innerHTML = "the first elements has been changed"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')


liDOM.innerHTML = "my own creating element"
//ulDOM.append(liDOM)

console.log(ulDOM.lastChild)

ulDOM.prepend(liDOM)