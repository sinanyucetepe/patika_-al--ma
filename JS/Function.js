function helloWorld() {
    console.log("hi cupcake")
}
function hello() {
    console.log("hi honey")
    helloWorld()
}


/* 
function userCheck() {
    if ( userName && age>=18) {
        info.innerHTML= "you can take license"
    } else if (!userName) {
        info.innerHTML="there is no nickname", " please give your nickname"
    } else if ( !(age>18) ) {
        info.innerHTML="there is no nickname or you are youger than 18"
    }
}*/

hello()