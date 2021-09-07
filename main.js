// Basics of JavaScript

/*
    Multiline comment
    -- Variable declaration
    Primitive Types: Strings, Integers, Booleans, Floats
    Arrays, Objects (aka directories in Python)

    Functions
    Loops
*/

var first_name = 'Bill';


// Display on comsole

console.log(first_name);

// integer variable
var some_number = 30;

console.log(some_number);

// floats
var some_float = 3.1415;

console.log(some_float);

// array
var some_array = [1,2,3,4]

console.log(some_array);

// object
var some_object = {'test':'Please test this!'};

console.log(some_object);

// JavaScript Hoisting Example
// console.log(some_random_variable);
// var some_random_variable = 'This is a random string';
// console.log(some_random_variable);


// console.log(some_other_variable);
// let some_other_variable = 'Here is a random string';
// console.log(some_other_variable);

// A better way of delaring a Variable is by using 'let' and/or 'const'

let full_name = first_name + ' ' + 'Smith';

console.log(full_name);

const super_hero = 'The Incredible Hulk'

console.log(super_hero);

// Redeclaring Variables

full_name = "This Awesome Guy";

console.log(full_name);

// super_hero = "Iron Man"; // Expect an error, cannot reassign constant variables
// console.log(super_hero);

/**
 * Basic Math Operation:
 * Addition
 * Subtraction
 * Multiplication
 * Division
 * Exponential
 */

let sum = 5 + 5;
console.log(sum);

let diff =  5 - 5;
console.log(diff);

let mult = 5 * 5;
console.log(mult);

let div = 5 / 5;
console.log(div)

let square = 5 ** 2;
console.log(square);

/**
 * More math operations
 * Floor
 * Ceiling
 */

let find_floor = Math.floor(33.333);
console.log(find_floor);

let find_ceiling = Math.ceil(33.333);
console.log(find_ceiling);

// Second to last Mind Bender

let crazy_stuff = some_float + '4' // undefined, 7.14, '3.14154'
console.log(crazy_stuff);

let crazy_stuff2 = some_float + parseFloat('4');
console.log(crazy_stuff2);

// More redeclaration

let nba_goat = 'MJ';

/* bad redeclaration
* let nba_goat = 'LeBron';
* console.log(nba_goat);
*/

// FUNCTIONS

function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2;

}

console.log(addNums());

// with parameters

let addNums2 = function(num,num2){
    return num + num2;
}

console.log(addNums2(5,6));

// ES6 Arrow Function Expressions with parameters

let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2;
}

console.log(multiplyNums());

// single parameter only for arrow without perentheses, not with 2 or more

let cubed = num => {
    return num ** 3;
}

let powered = (num, power) => {
    return num ** power;
} 

console.log(cubed(4));
console.log(powered(2,5));

// closure: Self invoking function

console.log((function(name){
    let hello = 'Hello World ' + name;
    return hello;
}
)('Stephen'));

// control flow
// if statement

function determineAge(age){
    if (age < 18){
        return 'minor';
    } else if (age >= 18 && age <= 65){
            return 'adult, not a minor';        
    } else {
        return 'Elderly Person - retired';
    }
}

console.log(determineAge(32));

function determine_age(age){
    return ( age < 18 ) ? 'Minor' : ( age >= 18 && age <= 65 ) ? 'adult' : 'Elderly, retired'
}

console.log(determine_age(67));

// for loop
function countByOne(n){
    for(let i = 0; i < n; i++){
        console.log(i);
    }
    return 'counting has stopped'
}

console.log(countByOne(20));
function decreaseByOne(){
// by decrement
    for(let i = 20; i >= 0; i--){
        console.log(i);
    }
    return 'decreasing has stopped'
}
console.log(decreaseByOne());

function countWithWhile(){
    let i = 0;
    let text = '';

    while (i < 10){
        text += `This number is... ${i} \n`;
        i++;
    }
    return text
}

console.log(countWithWhile());

function countWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text +=`This is the number currently... ${i} \n`;
        i++;
    }

    while(i < 10)
    return text
}

console.log(countWithDoWhile());

/**
 * Looping with arrays and array methods
 * Array String Methods
 */

let groupOfNames = ['Terry','Ben','Ash','Brock','Misty']
console.log(groupOfNames[0]); // Terry

//Deconstruction of an array

let a, b, c;

[a, b, c] = groupOfNames;

console.log(a, b, c); 

// method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < groupOfNames.length; i++){
        console.log(groupOfNames[i]);
    }
    return 'Done with all names';
}

console.log(showAllNames());

// method 2 for looping an array

groupOfNames.forEach(element => console.log(element));

// Method: array.toString

console.log(groupOfNames.toString());
console.log(typeof(groupOfNames.toString()));

/**
 * Array Methods: .map(), .filter(), .reduce()
 */

// .map()
let bNames = groupOfNames.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

// Long version of .map()
let bTestNames = function(){
    let testArray = [];
    for (let i = 0; i < groupOfNames.length; i++){
        if (groupOfNames[i][0] == 'B'){
            testArray.push(groupOfNames[i])
        }
    }
    return testArray
}

console.log(bNames);
console.log(bTestNames());

// .reduce()
const nums = [2,4,6,8,10]
let numsReduced = nums.reduce( (accumulator, currentNumber) => {
    return accumulator + currentNumber;
} )

console.log(numsReduced)

// .filter()
let longNames = groupOfNames.filter( element => element.length > 4 )

console.log(longNames)

// Array methods with String values: .join(), .slice(), .search(), .splice()

console.log(groupOfNames.join(", "));

console.log( groupOfNames.slice(0,3) );

let capturedValue = groupOfNames.splice(0,1, "Jesse");
console.log( `This was removed based on our splice ${capturedValue}` );
console.log(groupOfNames);

function replaceNewNames(){
    // for loop to get all names
    // and replace even indices
    for (let i = 0; i < groupOfNames.length; i++){
        if (i % 2 == 0){
            groupOfNames.splice(i,1, 'James');
        }
    }
    return groupOfNames;
}

console.log(replaceNewNames());

// using .search() and .slice() on array values that are strings

console.log( groupOfNames[0].search('a') )

console.log( groupOfNames[1].slice(0,groupOfNames[1].length))
