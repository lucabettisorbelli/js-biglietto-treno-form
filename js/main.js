bottone.addEventListener("click", function () {

    //dati distanza in km
    let distance = document.getElementById("chilometri").value;
    distance = parseInt(distance);
    console.log(`la distanza in km è di: ${distance}`);

    //dati età utente
    let eta = document.getElementById("eta").value;
    console.log(`l'età utente è di: ${eta}`);

    if (isNaN(distance)) {
        console.log("La distanza non è un numero. Impossibile procedere.");
    } else {
        let prezzo = distance * 0.21;
        let messaggio = "";
        console.log("Prezzo di base", prezzo);

        switch (eta) {
            case "minorenne":
                prezzo = prezzo * 0.8;
                messaggio = `Hai diritto allo sconto 'under 18'.`;
                break;
            case "adulto":
                messaggio = `Non hai diritto a nessuno sconto.`;
                break;
            case "over65":
                prezzo = prezzo * 0.55;
                messaggio = `Hai diritto allo sconto 'senior'.`;
                break;
        }

        messaggio += ` Il prezzo del biglietto è: ${prezzo.toFixed(2)} €`;
        document.getElementById("risultato").innerText = messaggio;
        console.log("Prezzo finale", prezzo);
    }
});





