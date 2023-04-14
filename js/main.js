
bottone.addEventListener("click", function () {

    //dati distanza in km

    let distance = document.getElementById("chilometri").value;
    distance = parseInt(distance);
    console.log(`la distanza in km è di: ${distance}`);

    //dati età utente
    
    let etaUtente = document.getElementById("eta").value;
    etaUtente = parseInt(etaUtente);
    console.log(`l'età utente è di: ${etaUtente}`);

    if (isNaN(distance)) {
        console.log("La distanza non è un numero. Impossibile procedere.");
    } else {
        let prezzo = distance * 0.21;
        let messaggio = "";
        console.log("Prezzo di base", prezzo);

        if (isNaN(etaUtente)) {
            console.log("L'età è errata. Non verranno applicate scontistiche");
        } else {
            if (etaUtente < 18) {
                prezzo = prezzo * 0.8;
                messaggio = `Hai diritto allo sconto 'under 18'.`;
            } else if (etaUtente > 65) {
                prezzo = prezzo * 0.55;
                messaggio = `Hai diritto allo sconto 'senior'.`;
            }
        }

        messaggio += ` Il prezzo del biglietto è: ${prezzo.toFixed(2)} €`;
        document.getElementById("risultato").innerText = messaggio;
        console.log("Prezzo finale", prezzo);
    }
});






