let domain = "kodluyoruz"
let isActive =false
let items = [15,25,35,isActive,domain]
console.log(items)
 
let emptyArray = []

// to learn number of element

console.log(
    items.length
)
document.querySelector("#info").innerHTML= items.length
console.log(items[0])
console.log(items[items.length-1])

console.log(
    typeof(items)
)
console.log(
    Array.isArray(items)
)