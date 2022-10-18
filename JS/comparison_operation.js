//var user= "quest";
//var price =1;
//console.log(price>2 && user=="quest")

//let username = prompt("please give your name")

//if (username.length >0) {
 //   console.log(`your username is ${username}`)
//} else console.log("bilgi yok")
let inputString = prompt("please give number")
/*
if (n%2 ==1) {
    console.log(`weird`)
} 
else if (n%2==0 && n <5 && n>2) 
    {console.log("not weird")}
else if (n%2==0&& n<6 && n>20 )
     {console.log("weird")}
else if(n%2==0 && n>20 ) 
    {console.log("not weird")}
*/
if ((inputString >=1 && inputString % 2 == 1) || (inputString >= 6 && inputString<=20)) 
 {
        console.log("weird")
} 
else {
        console.log("not weird") 
}
