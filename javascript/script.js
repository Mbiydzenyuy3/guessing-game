// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let attempts = 0;
const maxAttempts = 5;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const hintElement = document.getElementById("hint");
const attemptsElement = document.getElementById("attemps");

// Add event listener to the submit button
submitButton.addEventListener("click", checkGuess);

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess and convert it to a number
  const userGuess = parseInt(guessInput.value);
  attempts++;

  // Check if the guess is correct
  if (userGuess === 33) {
    hintElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    disableGame();
  } else if (attempts === maxAttempts) {
    hintElement.textContent = `Game over! The correct number was ${33}.`;
    disableGame();
  } else if (userGuess < 33) {
    hintElement.textContent = "Too low! Try a higher number.";
  } else {
    hintElement.textContent = "Too high! Try a lower number.";
  }

  // Update attempts display
  attemptsElement.textContent = `Attempts: ${attempts}/${maxAttempts}`;

  // Clear the input field
  guessInput.value = "";
}

// Function to disable the game after it ends
function disableGame() {
  guessInput.disabled = true;
  submitButton.disabled = true;
}
