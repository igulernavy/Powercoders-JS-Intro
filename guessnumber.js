// 1. Computer generates a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// 2. Variable to store the user's guess
let guess = null;

// 3. While loop -> keeps running until the user guesses correctly
while (guess !== secretNumber) {
  // Ask the user for a guess (prompt returns a string, so we convert it to a number)
  guess = parseInt(prompt("Guess a number between 1 and 100:"));

  // Compare the guess with the secret number
  if (guess === secretNumber) {
    alert("Congratulations! You guessed it 🎉");
  } else if (guess < secretNumber) {
    alert("Try a bigger number 🔼");
  } else if (guess > secretNumber) {
    alert("Try a smaller number 🔽");
  }
}