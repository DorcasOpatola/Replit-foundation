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



// TEMPLATE STRINGS
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




// DEFAULT PARAMETERS
function welcome(user='Mystery person', message='goodday'){
    alert(`Hello ${user}, ${message}!`)
}

welcome();
welcome("Ade", "I am delighted to see you");
*/




// ARROW FUNCTIONS
function greeting(message){
    return alert(`${message} everyone!`)
}

// Arrow functions are used as a shorthand for function definition
// The 'function' keyword is not needed, but is replaced by 'let'.
// If only one arguement is passed, the parenthesis is not needed, only needed when more than one parenthesis is passed.
// If you are returning only one statement, then, the "return" keyword is not needed.
let greet = (message) => alert(`${message} Ashley!`);

let workday = (user, days, months) => alert(`Hello ${user}, you have now worked a total of ${days * months} days in this organization.`);

let worky = (days, weeks, month) => {
    if (days, weeks, month){
        year = days * weeks * month
    }
    return alert(`There are ${year} working days in a year.`);
}

// This function takes multiple argument
let createBlog = (title, body) => {
    if (!title){
        throw new Error("A title is required!");
    }
    if (!body){
        throw new Error("Body can't be empty!");
    }
    return alert(`${title} - ${body}`);
}

// This function takes no input
let hello = () => ("Hello everyone");

greeting("It's dinner time");
greet("Get out now");
worky(5, 52, 12);
workday("Bola", 5,8);
createBlog(44,"Today is Monday!");
hello();



