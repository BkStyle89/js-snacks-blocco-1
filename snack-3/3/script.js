const numbers =[]

var sum = 0

for(i=0; i<=10;i++){
    let numbers = prompt ('scegli 10 numeri diversi');
    sum += numbers[i];
}
console.log(sum)