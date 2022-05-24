const prompt = require("prompt-sync")({sigint: true});

 let num = Number(prompt("Enter a number from 1 to 100: "));

 if (num % 3 === 0 && num % 5 === 0) {
     console.log("FizzBuzz");
 } else if (num % 3 === 0) {
     console.log("Fizz");
 } else if (num % 5 === 0) {
     console.log("Buzz");
 } else {
     console.log("Number not divisible by 3 or 5")
 } 