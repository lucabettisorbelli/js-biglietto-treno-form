let bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {

    // nome utente
    let nomeUtente = document.getElementById("nomeUtente").value;
    if (/\d/.test(nomeUtente)) {
        console.log("Errore: il nome utente non può contenere numeri.");
        document.getElementById("risultato").innerText = "Errore: il nome utente non può contenere numeri.";
        return;
    } else {
        console.log(`Il nome utente é: ${nomeUtente}`);
    }

    //dati distanza in km
    let distance = document.getElementById("chilometri").value;
    distance = parseInt(distance);
    console.log(`la distanza in km è di: ${distance}`);

    //dati età utente
    let eta = document.getElementById("eta").value;
    console.log(`l'età utente è di: ${eta}`);

    if (isNaN(distance)) {
        console.log("La distanza non è un numero. Impossibile procedere.");
        document.getElementById("risultato").innerText = "Errore: la distanza non può contenere lettere.";
    } else {
        let prezzo = distance * 0.21;
        let messaggio = "";
        console.log("Prezzo di base", prezzo);

        switch (eta) {
            case "minorenne":
                prezzo = prezzo * 0.8;
                messaggio = `Hai diritto allo sconto 'under 18'.`;
                document.getElementById("offerta").innerText = "offerta minori";
                break;
            case "adulto":
                messaggio = `Non hai diritto a nessuno sconto.`;
                document.getElementById("offerta").innerText = "offerta standard"
                break;
            case "over65":
                prezzo = prezzo * 0.55;
                messaggio = `Hai diritto allo sconto 'senior'.`;
                document.getElementById("offerta").innerText = "offerta over 65"
                break;
        }

        // risultati da stampare
        
        document.getElementById("risultato").innerText = messaggio;
        document.getElementById("prezzo").innerText = (prezzo.toFixed(2)) + "€";
        console.log("Prezzo finale", prezzo.toFixed(2));
        document.getElementById("nome").innerText = (nomeUtente);
    }
});

        // pulsante reset
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("nomeUtente").value = "";
    document.getElementById("chilometri").value = "";
    document.getElementById("eta").selectedIndex = 0;
    document.getElementById("risultato").innerText = "";
});