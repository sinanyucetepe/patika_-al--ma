let laptop1 = {
    brand:"Apple", 
    model:"MacBook Pro",
    "2kg": 2,
    modelName: "Macbook Pro"

}  // to use object {} if we need to set array use to []

console.log(laptop1)
console.log(laptop1.brand,laptop1["brand"])
console.log(laptop1.model)
console.log(laptop1["model"])
console.log(laptop1["2kg"])

laptop1.brand= "Mac"
laptop1["brand"]= "Mac1"
console.log(laptop1)


laptop1.version= "10.15.7"
console.log(laptop1)


keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

for(const key in keys)
console.log(key)


keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value:", value)
})


let show = {
    showName:"How I Met Your Mother",
    characters:[
    {

  	name:"Ted",
  	age: 35,
  	job: ["Architect"]
  },
  {
  	name: "Robin",
  	age: 32,
  	job: ["News Anchor", "Pop-Star"]
  }
  ]
}
alert(show.characters[1].job[1])
