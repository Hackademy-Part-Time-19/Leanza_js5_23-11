// funzione che verifica i numeri pari di una lista

let listaNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filtraNumeriPari (lista){
let listaNumeriPari = lista.filter((index) => index % 2 == 0);
return listaNumeriPari;
}

let listaNumeriPari = filtraNumeriPari(listaNumeri)
console.log(listaNumeriPari)


// funzione per filtrare, da una concatenazione di due array, solo gli elementi con 5 lettere

let array1 = ["cane", "mucca", "pecora", "leone", "tigre"];
let array2 = ["pane", "pasta", "pesce", "verdura", "frutta"];
let lunghezzaMinimaParola = 5


function filtraPerLunghezza (array1, array2, lunghezzaMinima){
    let arrayUnito = array1.concat(array2);
    let arrayUnitoFiltrato = arrayUnito.filter((index) => index.length >= lunghezzaMinima);
    return arrayUnitoFiltrato;
}

let arrayUnitoFiltrato = filtraPerLunghezza(array1, array2, lunghezzaMinimaParola)
console.log(arrayUnitoFiltrato)





