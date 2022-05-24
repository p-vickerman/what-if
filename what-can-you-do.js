const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("Enter your age: "));

if (age < 16){
    console.log("You can't drive.")
} 
if(age >= 16 && age < 18){
    console.log("You can drive but not vote")
}
if (age >= 18 && age <= 24){
    console.log("You can vote but not rent a car.")
}
if (age >= 25){
    console.log("You can do pretty much anything.")
}