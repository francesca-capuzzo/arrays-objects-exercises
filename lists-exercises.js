//*********************************************************/
//ARRAY TO LIST & LIST TO ARRAY:

function arrayToList(array) {
    let newList = null;
    for (let i = array.length - 1; i >= 0; i--) {
        newList = {value: array[i], rest: newList};
    }
    return newList;
}

console.log(arrayToList([1, 2, 3]));


function listToArray(list) {
    let array = [];
    for (let i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

//spiegazione: 
// newList = null;
// i = (3-1) = 2;     newList = {value: array[2], rest: null}   
// i = (2-1) = 1;     newList = {value: array[1], rest: {value: 3, rest: null}}
// i = (1-1) = 0;     newList = {value: array[0], rest: {value: 2, rest: {value: 3, rest: null}}}

//array = [];
//i = [1, 2, 3]       array = (i.value[0]) = [1]
//i = [1, 2, 3]       array = (i.value[1]) = [1, 2]
//i = [1, 2, 3]       array = (i.value[2]) = [1, 2, 3]

//NON HO CAPITO LIST TO ARRAY!!!!



//**********************************************************/
//DEEP COMPARISON:

let obj = {here: 4, object: 2};
let obj2 = {here: 4, object: 2};

function deepEqual(a, b) {
    if (a === b) return true;                                                                    
    if (a == null || b == null || typeof a !== "object" || typeof b !== "object") return false;

    //if (a === null || b === null|| typeof a !== typeof b) return false;
    let keyA = Object.keys(a)                                           //define keys
    let keyB = Object.keys(b)

    if (keyA.length !== keyB.length) {                                  //check length
        return false;
    }
    for (const key of keyA) {
        //define all keys of keyA (which already take keys)
        if (!keyB.includes(key) || (!deepEqual(a[key], b[key]))) {
            return false;
        }
    }
    // if (keyA !== keyB) {
    //     return false;
    // }
    return true;
}

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, obj2));

console.log(deepEqual(obj, {here: 1, object: 2}));


