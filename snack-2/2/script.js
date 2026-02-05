let firstWord = prompt('Scegli La prima parola')
let secondWord = prompt('Scegli la seconda parola')
let message = ('risultato')
{
if ( firstWord.length > secondWord.length)
   message ='Ha vinto il primo giocatore'
else if (firstWord.length < secondWord.length)
    message ='ha visto il secondo giocatore'
else (firstWord.length == secondWord.length)
    message ='pareggio'
}
console.log(message)
