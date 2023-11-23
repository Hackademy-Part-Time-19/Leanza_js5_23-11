
function aggiungiElementoArray(lista, elemento) {
    lista.push(elemento);
    return lista;
}

function rimuoviElementoArray(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            lista.splice(i,1);
        }
    }
    return lista;
}

function listaOrdinataPerNome(lista) {
    lista.sort();
    return lista;
}

function ModificaElementoArray(lista, elementoArray, nuovoElemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elementoArray) {
            lista[i] = nuovoElemento;
        }
    }
    return lista;
}

function resettaLista(lista) {
    lista = [];
    return lista;
}


alert("Benvenuto nella tua lista della spesa! \nQui potrai aggiungere, rimuovere, modificare e resettare la tua lista della spesa. \nPremi OK per continuare.");
let operazioneUtente
let listaDellaSpesa = [];

while (operazioneUtente != 7) {
    operazioneUtente = parseInt(prompt("Scegli l'operazione che vuoi effettuare! :\n 1. Aggiungi un elemento alla lista \n 2. Rimuovi un elemento dalla lista \n 3. Ordina lista in ordine alfabetico \n 4. Modifica un elemento della lista \n 5. Resetta la lista \n 6. Visualizza la tua lista della spesa \n 7. Esci dal programma"));
    switch(operazioneUtente) {
        case 1 : 
            let ProdottoDaAggiungere = prompt("Inserisci l'elemento che vuoi aggiungere alla lista della spesa:");
            listaDellaSpesa = aggiungiElementoArray(listaDellaSpesa, ProdottoDaAggiungere);
            alert("Elemento aggiunto alla lista della spesa!")
            alert("Ecco la tua lista aggiornata: " + listaDellaSpesa);
            break;
        case 2 : 
            let prodottoDaRimuovere = prompt("Inserisci l'elemento che vuoi rimuovere dalla lista della spesa:");
            listaDellaSpesa = rimuoviElementoArray(listaDellaSpesa, prodottoDaRimuovere);
            alert("Elemento rimosso dalla lista della spesa!")
            alert("Ecco la tua lista aggiornata: " + listaDellaSpesa);
            break;
        case 3 : 
            listaDellaSpesa = listaOrdinataPerNome(listaDellaSpesa);
            alert("Lista aggiornata in ordine alfabetico!")
            alert("Ecco la tua lista aggiornata: " + listaDellaSpesa);
            break;
        case 4 :
            let prodottoDaModificare = prompt("Inserisci il prodotto da sostituire:");
            let prodottoDaAggiornare = prompt("Inserisci il nuovo prodotto:");
            listaDellaSpesa = ModificaElementoArray(listaDellaSpesa, prodottoDaModificare, prodottoDaAggiornare);
            alert("La tua lista è stata aggiornata con successo!")
            alert("Ecco la tua lista aggiornata: " + listaDellaSpesa);
            break;
        case 5 : 
            listaDellaSpesa = resettaLista(listaDellaSpesa);
            alert("Adesso la tua lista è vuota!")
            break;
        case 6 :
            alert("Ecco la tua lista della spesa: " + listaDellaSpesa);
            break;
        case 7 : 
            alert("Arrivederci!");
            break;
        default :
            alert("Operazione non valida!");
            break;
    }

}