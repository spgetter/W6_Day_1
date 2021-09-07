//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
// let dog_names2 = ["max","have","purple","Dog"]

function findWords(n,s){
    return n.filter( element => s.includes(element) ); 
}

console.log(findWords(dog_names,dog_string))
// console.log(findWords(dog_names2,dog_string))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
Given:
*/

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// let odd_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i,1, 'even index');
        }
    }
    return arr 
}

// function replaceOdds(arr){
//     for (let i = 0; i < arr.length; i++){
//         if (i % 2 != 0){
//             arr.splice(i,1, 'odd index');
//         }
//     }
//     return arr 
// }

console.log(replaceEvens(arr));
// console.log(replaceOdds(odd_arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]