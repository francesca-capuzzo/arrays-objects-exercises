//*******************ESERCIZIO 1******************/
//SUM OF A RANGE:

let rangeArray = [];
let step;
function range(start, end, step) {
    for (let i = 1; i <= end; i += step) {
        const element = rangeArray[i];
        rangeArray.push(i);
    }
    return rangeArray;
}

console.log(range(1, 10, 2));


let total = 0;

function sum(array) {
    for (let i = 0; i < array.length; i++) {
        total += rangeArray[i];
    }
    return total;
}
console.log(sum(rangeArray));

//NB FUNZIONA con numeri positivi ma non negativi nello step
