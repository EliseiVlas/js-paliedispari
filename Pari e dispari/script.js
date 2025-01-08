// FACCIAMO SCEGLIERE AL UTENTE TRA PARI O DISPARI
let sceltaUtente = prompt("scegli tra pari o dispari")
console.log(sceltaUtente);


// Facciamo inserire al utente un n umero da 1 a 5
let numeroUtente = prompt("inserici un numero da 1 a 5")
console.log(numeroUtente);


// Tramite una funzione facciamo generare un numero casule da 1 a 5 dal pc
console.log(generaNumRandom());
function generaNumRandom(){
    const numeroGenerato = Math.floor(Math.random() * 5) + 1;

    return numeroGenerato
}

// Sommiamo i due numeri
let somma = generaNumRandom() + numeroUtente
console.log(somma);


// Tramite una funzion e stabiliamo se il numero e pari o dispari


// Dichiariamo chi ha vinto tra utente o il pc