let greeting = document.querySelector("#greeting")


greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("title","second-class","third-class") // adding more than clas

greeting.classList.remove("title","second-class","third-class")//removing more than class
console.log(greeting.classList)