let el1 = {value: "pippo", rest: null}        //IL PRIMO ELEMENTO DELLA LINKED LIST DIVENTA L'ULTIMO

let el2 = {value: "pluto", rest: el1}

let el3 = {value: "paperino", rest: el2}

console.log(el3);                             //paperino --> pluto --> pippo 
                                              //el3 diventa il primo elemento della lista perchè contiene gli altri due

ela = {value: "paperone", rest: el3}          //ora la prima della lista è ela 

elb = {value: "topolino", rest: el3}          //elb invece è sempre il primo della lista ma di una lista completamente separata che però condivide la coda con ela.

elc = prepend("zio paperone", elb)

console.log("ela", ela);
console.log("elb", elb);

/////////////////////////////////////////////////////////////////////////////////////////////////

//ARRAY TO LIST:

function arrayToList(array) {

    let firstNode = null;
    for (let i = array.length - 1; i >= 0; i--) {                        //al primo ciclo: value = array[3] = 5 (perchè cicla al contrario)
        let value = array[i];                                            //mentre rest = firstNode = null
        let rest;                                                        //al secondo ciclo: value = array[2] = 3
                                                                         //rest = firstNode = {value: 5, rest: null}
        if (firstNode === null){                                         //al terzo ciclo: value = array[1] = 2
            rest = null;                                                 //rest = firstNode = {value: 3, rest: {value: 5, rest: null}}   ecc ecc....
        } else {
            rest = firstNode;
        }
        let node = {value: value, rest: rest};            
        firstNode = node;
    }
    return firstNode;
}

console.log(arrayToList([1, 2, 3, 5]));




/////IMPLEMENTO LO STESSO CODICE IN MENO RIGHE!!

function arrayToList(array) {

    let firstNode = null;
    
    for (let i = array.length - 1; i >= 0; i--) {

        let node = {value: array[i], rest: firstNode};           
        firstNode = node;
    }
    return firstNode;
}

console.log();



//AGGIUNGO FUNZIONE PREPEND E IMPLEMENTO ANCORA LA PRECEDENTE:

function prepend(value, listNode) {
    let node = {value: value, rest: listNode};           
    return node;
}


function arrayToList(array) {
    let firstNode = null;
    for (let i = array.length - 1; i >= 0; i--) {

       firstNode = prepend(array[i], firstNode)
    }
    return firstNode;
}

console.log();


/////////////////////////////////////////////////////////////////////////////////////////////////////

//LIST TO ARRAY:

function listToArray(listNode) {
    
    let array = [];
    let node = listNode;

    while (node !== null) {
        array.push(node.value);
        node = node.rest;
    }
    return array;
}

console.log(listToArray(elb));                             //utilizzo elb che è già una linked list creata precedentemente.



function nth(listNode, index) {
    let node = listNode;
    let actualIndex = 0;

    while(node !== null){
        if (actualIndex === index) {                          //se l'indice corrisponde, ritorno il valore, altrimenti vado al possimo con node = node.rest e incremento l'indice di 1.
            return node.value;
        }
        node = node.rest;
        actualIndex++;
    }
    return undefined;                                        //se non trova l'indice ritorno undefined
}

console.log(listToArray(elc));
console.log(nth(elc, 2));
console.log(nth(elc, 12));


/////////////////////////////////////////////////////////////////////////////////////

//nth RICORSIVA (PRIMO MODO):

function nthRecursive(listNode, index, startIndex) {
    if (listNode === null) {
        return undefined;
    }
    
    if (startIndex === index) {
        return listNode.value;
    } 
    let node = listNode.rest;
    startIndex++
    return nthRecursive(node, index, startIndex)
}

console.log(nthRecursive(ecl, 3, 0));



function nthRecursive2(listNode, index) {
    if (listNode === null) {
        return undefined;
    } 
    if (index === 0) {
        return listNode.value;
    }
    return nthRecursive2(listNode.rest, index-1);         //decremento gli index (se chiedo indice 3, e il primo elemento non è null e index non è uguale a zero, butta via il primo elemento della lista e ricominci ma ora il valore con indice 1 diventa 0 e così via finche index ===0 non è true e quindi ritorna il valore cercato in origine)
}