// RACCOLTA DATI

const userKm = parseInt(prompt("Quanti kilometri devi percorrere?"));
let messageKm = ""
if (userKm > 800) {
    messageKm = `${userKm} km!?! Non disponiamo di tratte così lunghe!!!`;
} else {
    messageKm = userKm
}

const userAge = parseInt(prompt("Quanti anni hai?"));
let messageAge = ""
if (userAge > 110) {
    messageAge = `${userAge} anni?!? Ma non dovresti essere già morto??`;
} else {
    messageAge = userAge
}

console.log(messageAge, messageKm);

// LOGICA DELLA SOLUZIONE

const priceForKm = 0.21
const ticketPrice = messageKm * priceForKm
let messagePrice =""

if (isNaN(ticketPrice)) {
    messagePrice = "Inserire dei dati validi"
} else {
    messagePrice = ticketPrice.toFixed(2)
}

// SCONTI
const discountMinors = messagePrice * 0.2
const discountOver = messagePrice * 0.4

if(userAge < 18) {
    messagePrice = messagePrice - discountMinors.toFixed(2)
}

if(userAge > 65) {
    messagePrice = messagePrice - discountOver.toFixed(2)
}

console.log(messagePrice);

document.getElementById("kilometri").innerHTML = messageKm
document.getElementById("age").innerHTML = messageAge
document.getElementById("total-price").innerHTML = messagePrice

