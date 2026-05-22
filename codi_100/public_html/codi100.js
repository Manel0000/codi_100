"use_strict";
// Variables
let numeroSecret = parseInt(Math.random() * 100) + 1;
let intentUsuari = 0;
let intents = 0;
let maxIntents = 6;
let encertat = 0;

// Missatge inicial
alert("Benvingut/da al joc d'endevinar el nombre!");
alert("L'ordinador ha generat un número de l'1 al 100.");
alert("Tens 6 intents per endevinar-lo!");

// Bucle del joc
while (encertat != numeroSecret && intents < maxIntents) {

    // Demanar número
    intentUsuari = Number(prompt("Escriu un número entre 1 i 100:"));

    // Comptar intents
    intents++;
    
   
// Comprovar si s'ha encertat
    if (intentUsuari == numeroSecret) {

        encertat = numeroSecret;

        alert("Felicitats! Has encertat el número!");
        alert("Has necessitat " + intents + " intents.");

    }

    // Comprovar si és massa alt
    else if (intentUsuari > numeroSecret) {

        alert("Massa alt!");

    }

    // Comprovar si és massa baix
    else if (intentUsuari < numeroSecret) {

        alert("Massa baix!");
    }

// Si s'acaben els intents i no ha encertat
if (intents == maxIntents && encertat != numeroSecret) {

    alert("Has perdut!");
    alert("El número secret era: " + numeroSecret);
}
}