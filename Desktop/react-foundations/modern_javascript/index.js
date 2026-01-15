// CREATING VARIABLES IN ES6

/*
var fname = "Dorian";  // global variable, value can be changed anytime
fname = "Alice";
// 'var' keyword is deprecated in modern javascript, use 'let' and 'const' instead

const lname = "Bobbie";  
// constant variable, value cannot be changed. used for variables whose value doesn't change overtime

if (true){
    let mname = "Eve";  // block scoped variable, only accessible within this block
    alert(mname);
}

alert(lname);
alert(fname); 

*/

let fname = "Amaka";
let lname = "Goodness";
let age = prompt("Guess Amaka's age...");
realage = 22;

// old way of string concatenation
let resultOLD = fname + " " + lname + " is " + age + " years old.";
alert(resultOLD);

// new way of string concatenation using template literals
let result = `${fname} ${lname} is actually ${realage} years old today.`;
alert(result);

