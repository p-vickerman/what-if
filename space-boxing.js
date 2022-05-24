const prompt = require('prompt-sync')();

 let weight = Number(prompt("What is your earth weight: "));

 let planet = Number(prompt("1 = Venus, 2 = Mars, 3 = Jupiter, 4 = Saturn, 5 = Uranus, 6 = Neptune. Enter a number 1 - 6 to select which planet you are fighting on: "))

 if (planet === 1) {
     weight = weight * 0.78;
     console.log("Your weight on Venus is " + weight);
 } else if (planet === 2) {
     weight = weight * 0.39;
     console.log("Your weight on Mars is " + weight);
 } else if (planet === 3) {
     weight = weight * 2.65;
     console.log("Your weight on Jupiter is " + weight);
 } else if (planet === 4) {
     weight = weight * 1.17;
     console.log("Your weight on Saturn is " + weight);
 } else if (planet === 5) {
     weight = weight * 1.05
     console.log("Your weight on Uranus is " + weight);
 } else if (planet === 6) {
     weight = weight * 1.23
     console.log("Your weight on Neptune is " + weight);
 } else {
     console.log("Error: Enter a number 1 - 6");
 }