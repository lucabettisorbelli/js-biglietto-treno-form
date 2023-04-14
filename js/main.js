// let etaUtente = parseInt(prompt("Inserisci la tua età"));
// let distance = parseInt(prompt("Inserisci la distanza chilometrica"));

bottone.addEventListener("click", function() {
    let distance = document.getElementById("chilometri").value;
    distance = parseInt(distance);

    console.log(distance);
});

if (isNaN(distance)) {
    console.log("La distanza non è un numero. Impossibile procedere.");
} else {

    let prezzo = distance * 0.21;
    let messaggio = "";

    console.log("Prezzo di base", prezzo);

    if (isNaN(etaUtente)) {
        alert("L'età è errata. Non verranno applicate scontistiche");
    } else {

        if (etaUtente < 18) {
            prezzo *= 0.8;

            messaggio = `Hai diritto allo sconto 'under 18'.`;

        } else if (etaUtente > 65) {
            // console.log("L'utente è over 65");
            prezzo *= 0.55;

            messaggio = `Hai diritto allo sconto 'senior'.`;
        }
    }


    messaggio += ` Il prezzo del biglietto è: ${prezzo.toFixed(2)} €`;

    document.getElementById("risultato").innerText = messaggio;

    console.log("Prezzo finale", prezzo);

}

// const getValueInput = () => {
//     let inputValue = document.getElementById("domTextElement").value;
//     document.getElementById("valueInput").innerHTML = inputValue;
// }
