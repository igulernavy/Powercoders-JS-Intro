console.log("Hello Powercoders!");
//age checker
//we want to check if a user is allowed to buy a beer, schnaps or nothing at all
let age = null;
age = prompt("How old are you?");
console.log(age);
age = Number(age);
// Check input validity
if (!age || age < 0 || age > 130) {
    console.log ("Don't lie!")
} else if (age < 16) {
    console.log("Sorry, you are too young. You can't buy alcohol.");
} else if (age >= 16 && age < 18) {
    console.log("You can buy beer and wine 🍺🍷.");
} else if (age >= 18) {
    console.log("You can buy beer, wine and schnaps 🍺🍷🥃.");
}