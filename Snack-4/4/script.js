/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numeriDispari = [];

for(i=0; i<6;i++){
    let numb = prompt ('Inserisci il numero');
    /* console.log(numb) */
    if (i%2 !== 0)
        numeriDispari.push(numb)
}
console.log('numeri dispari',numeriDispari)