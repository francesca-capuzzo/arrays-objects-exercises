// PART 1:
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);   //RESULT: FALSE

console.log(day1.wolf);       //RESULT: UNDEFINED **property that doesn't exist.

day1.wolf = false;
console.log(day1.wolf);       //RESULT: FALSE  

//PART 2:
let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"], 
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true}
]
//and so on......

//PART 3:
let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});  //NB: should be events: events, squirrel: squirrel but having the same name, only one entry will be fine!!
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);

//PART 4:

// φ = 1 (100% CORRELATION) --> uguali
// φ = 0 (0% CORRELATION) --> non correlati
// φ = -1 (-100% CORRELATION) --> opposti

//n11 = pizza, squirrel = 1               --> table[3]
//n00 = NO pizza, NO squirrel = 76        --> table[0]
//n10 = squirrel, NO pizza = 4            --> table[2]
//n01 = NO squirrel, pizza = 9            --> table[1]
//n1 = all true squirrel = 5              --> table[2] + table[3]
//n0 = all false squirrel = 85            --> table[0] + table[1]
//n•1 = all true pizza = 10               --> table[1] + table[3]
//n•0 = all false pizza = 80              --> table[0] + table[2]

//  φ = (n11*n00 - n10*n01) / (sqr(n1*n0*n•1*n•0))
//     = (1*76 - 4*9) / (sqr(5*85*10*80))
//      = 0.069 

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2]) + (table[3])) * 
                 ((table[0]) + (table[1])) *
                 ((table[1]) + (table[3])) *
                 ((table[0]) + (table[2])) ; 
}

console.log(phi([76, 9, 4, 1]));  //RESULT: 0.068599434

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        const entry = journal[i], index = 0;
        if (entry.events.include(event)) index += 1;
        if (entry.squirrel) index += 2;
            table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", journal));  //RESULT: [79, 9, 4, 1]


function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(journal));  //RESULT: ["carrot", "exercise", "weekend", "bread" ...]

for (let event of journalEvents(journal)) {
    console.log(event + ": " + , phi(tableFor(event, journal)));
    
}