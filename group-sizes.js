const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter your class size: "));

let remainder = num % 3;

let answer = num / 3;

let remainder1 = num - 1;

let remainder2 = num - 2;

if (remainder === 0) {
    console.log("You will have " + answer + " groups of three.");
} else if (remainder === 1) {
    let groupsOfThree = (remainder1 / 3) - 1;
    console.log("You will have " + groupsOfThree + " groups of three and 2 groups of two.");
} else {
    let groupsOfThree = remainder2 / 3;
    console.log("You will have " + groupsOfThree + " groups of three and 1 group of two.")
}