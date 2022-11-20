const PRODUCTS = ["Laptop","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]

PRODUCTS.forEach((product, index)=> console.log(product,index))

console.log(PRODUCTS)

const userListDOM = document.querySelector('#userList')
PRODUCTS.forEach(product => {
    const liDOM=document.createElement('li')
    liDOM.innerHTML= product
    userListDOM.append(liDOM)
})



const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );