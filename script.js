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

//SOMMA:
let total = 0;

function sum(array) {
    for (let i = 0; i < array.length; i++) {
        total += rangeArray[i];
    }
    return total;
}
console.log(sum(rangeArray));

//NB FUNZIONA con numeri positivi ma non negativi nello step

//*********************ESERCIZIO 3********************/

let str = [];
function reverseArray(stringArray) {
    for (let i = stringArray.length - 1; i >= 0; i--) {
        str.push(stringArray[i]) 
    }
    return str;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arrayValue) {
    for (let i = 0; i < Math.floor(arrayValue.length / 2); i++) {
        let strv = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length - 1 -i]; 
        arrayValue[arrayValue.length - 1 -i] = strv;
    }   
    return arrayValue;
}

console.log(reverseArrayInPlace([1,2,3,4]));