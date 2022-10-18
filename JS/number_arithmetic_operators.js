let price = 100 
let tax = 0.18
let priceTax = price * tax
let total =price + priceTax
console.log(
    "Fiyat", price, 
    "KDV Oranı", tax, 
    "KDV Tutarı", priceTax,
    "Fiyat", total)

    //increase and decrease 
    let counter =320
    counter=counter+1
    counter +=1 ;
    counter ++;
    console.log(counter)

    counter --;
    console.log(counter)
    counter -=1;;
    console.log(counter)

    counter *=10;
    console.log(counter)

    counter /=5;
    console.log(counter)

    //math library for floor
    console.log("floor :",(Math.floor(1.7)))
    //math library for ceil
    console.log("Ceil :",(Math.ceil(2.6)))

    //math library for round
    console.log(Math.round(6.6))


    let stringNumber ="11" 
    console.log(stringNumber)
    let newNumber = Number(stringNumber)
    console.log(newNumber)
    console.log("Number constrctor ", Number ("111"))
