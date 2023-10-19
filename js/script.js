// RACCOLTA DATI

const userKm = parseInt(prompt("Quanti kilometri devi percorrere?"));

if (userKm > 9999) {
    alert(`${userKm} km!?! Non disponiamo di tratte così lunghe!!!`);
    userAge = window.location.reload()
} else if (isNaN(userKm)) {
    alert("Inserire un valore corretto")
    userAge = window.location.reload()
}

const userAge = parseInt(prompt("Quanti anni hai?"));

if (userAge > 110) {
    alert(`${userAge} anni?!? Ma non dovresti essere già morto??`);
    window.location.reload()
} else if (isNaN(userAge)) {
    alert("Inserire un valore corretto")
    userAge = window.location.reload()
}

console.log(userAge, userKm);

// LOGICA DELLA SOLUZIONE

const priceForKm = 0.21
const ticketPrice = userKm * priceForKm
let messagePrice = ticketPrice

// SCONTI

const discountMinors = messagePrice * 0.2
const discountOver = messagePrice * 0.4

if(userAge < 18) {
    messagePrice = messagePrice - discountMinors
    document.getElementById("discount").innerHTML = `Congratulazioni !!! Hai diritto ad uno sconto di ${discountMinors.toFixed(2)} €`
} else if (userAge > 65) {
    messagePrice = messagePrice - discountOver
    document.getElementById("discount").innerHTML = `Congratulazioni !!! Hai diritto ad uno sconto di ${discountOver.toFixed(2)} €`
}

console.log(messagePrice);

let finalPrice = `${messagePrice.toFixed(2)} €`

// STAMPA A PAGINA

document.getElementById("kilometri").innerHTML = userKm
document.getElementById("age").innerHTML = userAge
document.getElementById("total-price").innerHTML = finalPrice


