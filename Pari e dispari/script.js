// FACCIAMO SCEGLIERE AL UTENTE TRA PARI O DISPARI
let sceltaUtente = prompt("scegli tra pari o dispari")
console.log(sceltaUtente);


// Facciamo inserire al utente un n umero da 1 a 5
let numeroUtente = parseInt(prompt("inserici un numero da 1 a 5"))
console.log("l'utente ha scelto il numero " + numeroUtente);


// Tramite una funzione facciamo generare un numero casule da 1 a 5 dal pc
function generaNumRandomRange(numMax, numMin) {
    const numeroGenerato = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

    return numeroGenerato
}
let numeroPc = generaNumRandomRange(5, 1);
console.log("numero del pc e " + numeroPc);

// Sommiamo i due numeri
const sommaNumeri = numeroUtente + numeroPc;
console.log(sommaNumeri);

console.log(pariODispari(sommaNumeri));
// Tramite una funzion e stabiliamo se il numero e pari o dispari
function pariODispari(numero) {
    // dichiarazione variabile flag
    let risultato;

    if (numero % 2 === 0) {
        risultato = "pari";
        
    } else {
        risultato = "dispari";
    }

    // Dichiariamo chi ha vinto tra utente o il pc
    let risposta;

    if (sceltaUtente === risultato){
        risposta = "Hai vinto il numero e " + risultato;
    }else{
        risposta = "Hai perso il numero e " + risultato;
    }
    return risposta;
}    


