// chiediamo al utente di inserire una parola
let parolaUser = prompt("inserici una parola")
console.log(revertaParola(parolaUser));

// invertiamo la parola
function revertaParola(reverse) {
    let parolaRevertata = "";

    for (let i = reverse.length -1; i >= 0; i--){

        let carattereIesimo = reverse[i];

        parolaRevertata = parolaRevertata + carattereIesimo
    }


    let risultato;

    // se la parola invertita e uguale alla parola iniziale - allora e una parola polidroma
    if (parolaRevertata === parolaUser){
        risultato = "Parola polidroma"
    
    // se non e uguale non e una parola polidroma    
    } else {
        risultato = "Parola non polidroma"
    }

    console.log(parolaUser);
    console.log(parolaRevertata);
    
    
    return risultato

}


