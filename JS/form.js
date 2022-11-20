// Form summit
let formDOM =document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()  // cancelled to default parameter
    console.log("islem gerceklesti")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value) // get info about insede of input
    localStorage.setItem('score', scoreInputDOM.value)

}
