let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover",domClick)

function domClick(){
    console.log("has been clicked")
    this.style.color == "red"? this.style.color="black": this.style.color="red"    
}