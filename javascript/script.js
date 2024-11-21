const guess = document.getElementsById("#input-id")
let numb = 33;

function guessNumber(numb) {
  for (i = 0; i < numb; i++) {
    if (numb === 33) {
      alert("you win");
    } else {
      alert("Guess again");
    }
  }
}
