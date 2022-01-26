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




//SPIEGAZIONE IN CLASSE:



function range1(max, min = 0, step = 1) {
    let array1 = [];
    let start = step > 0 ? min : max;
    // let end;
    // if (step > 0) {
    //     end = max;
        
    // }else {
    //     end = min;
    // }
    for (let i = start; i <= max; i +=step){
        array1.push(i)
       
    }
    return array1;
}

console.log(range1(100, 10, -2));



function sumArray(numbers) {
    
    // let result = 0; con i = 0 oppure:
    let result = numbers[0]
    
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        result += element;
    }
    return result;
}

console.log(sumArray(range1));


//con lo split operator:

function sumArray(...numbers) {
    
    let result = numbers[0]
    
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        result += element;
    }
    return result;
}

console.log(sumArray(3, 7, 10, 34, 45));  //in questo caso prende i numeri, li trasforma in un array chiamato numbers e me li somma... più efficiente!!
console.log(sumArray(...range1));         //questo è un altro metodo e quindi vanno re-impacchettati i valori con i ...davanti alla funzione chiamata! cosi l'array si trasforma nei parametri di sumArray che poi lo re-impacchetta.






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




//SPIEGAZIONE IN CLASSE:

let array2 = [1, 2, 3, 4, 5, 6];

function reverse(array) {
    
    let reversed = [];
    
    for (let i = array2.length -1 ; i >= 0; i--) {
        
        const element = array2[i];
        reversed.push(element);
    }
    return reversed;
}

let reversedArray = reverse(array2)

console.log(reversedArray);



//oppure con il for of e unshift():

function reverse2(array) {
    
    let reversed = [];
    for (const number of array) {
        reversed.unshift(number)
    }
    return reversed;
}



function reverseInPlace2(arr) {
    let rev = reverse(arr);
    arr.length = 0;                //svuota un array.
    arr.push(...rev)               //push() non può prendere array come condizione quindi devo spacchettarlo con ...
}

console.log(reverseInPlace2());


function reverseInPlace3(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        // const headElement = arr[i];
        // const tailElement = arr[array.length - 1 - i];
        
        // let temp = headElement;
        // headElement = tailElement;
        // tailElement = temp;

        let temp = arr[i];
        arr[i] = arr[arr.length - 1- i];
        arr[arr.length - 1- i] = temp;
    }

    
}