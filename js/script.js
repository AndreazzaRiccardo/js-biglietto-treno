// RACCOLTA DATI

const userKm = parseInt(prompt("Quanti kilometri devi percorrere?"));
let messageKm = ""
if (userKm > 800) {
    messageKm = `${userKm} km!?! Non disponiamo di tratte così lunghe!!!`;
} else {
    messageKm = userKm
}

const userAge = parseInt(prompt("Quanti anni hai?"));
if (userAge > 110) {
    messageAge = `${userAge} anni?!? Ma non dovresti essere già morto??`;
} else {
    messageAge = userAge
}

console.log(messageAge, messageKm);


