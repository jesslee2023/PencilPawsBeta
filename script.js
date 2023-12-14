import { fetchRandomAnimal } from "./api.js";
import * as canvas from "./canvas.js";
import {
  clickSound,
  cards,
  inputContentWrapper,
  userInput,
  cardInformationCanvas,
  nextPageButtons,
  submitGuessBtn,
  playAgainBtn,
  conditionsWrapperEl,
  lettersInAlphabet,
  animalWordEl,
  loader,
} from "./constants.js";
import {
  displayGalleryImages,
  saveCanvasToLocalStorage,
  checkForPrevSavedCanvasImages,
} from "./gallery.js";
import { showWinningCondition, showLosingCondition } from "./conditions.js";

export let randomAnimal; // Varible to store the API's random animal
let secondsLeftToDraw = 30; // How many seconds the player should have to draw on the canvas
let currentPageNumber = 0; // What card/page the user is currently on
let nextPageNumber = currentPageNumber + 1; // The page number to be displayed next

function assignAnimal(animal) {
  randomAnimal = animal;
}
// This function waits for the API to fetch a random animal and then when function is called, displays the animal in text in the HTML.
async function loadAnimal() {
  const animal = await fetchRandomAnimal();
  assignAnimal(animal);
  animalWordEl.textContent = randomAnimal;
  loader.classList.remove("loader--visible");
}

function handleTimeUp() {
  canvas.disableDrawing();
  saveCanvasToLocalStorage();
  cardInformationCanvas.textContent = "Nice drawing!!";
  inputContentWrapper.classList.add("input__content-wrapper--visible"); // Show form where user can input guess
  cards[currentPageNumber].classList.add("card--content-positioning"); // Push canvas to the side to make place for form (grid on class in css)
}
// This function checks if the user have any time left to draw and eccecutes accordingly
function checkTimeLeftToDraw() {
  if (secondsLeftToDraw === 0) {
    handleTimeUp();
  } else {
    setTimeout(countDownSeconds, 1000); // Keep counting down by calling the function again after 1 second
  }
}

function displaySecondsLeftToDraw() {
  const counter = document.querySelector("#counter");
  counter.textContent = secondsLeftToDraw;
}
// This function counts down the time the user have to draw the animal on the canvas and updates a counter displayed in HTML
function countDownSeconds() {
  secondsLeftToDraw -= 1;
  checkTimeLeftToDraw();
  displaySecondsLeftToDraw();
}

// This function check for the current card/page-number and calls for functions if anything should be displayed on a specific card/page
function updateContentBasedOnPageNumber() {
  if (currentPageNumber === 2) {
    loadAnimal();
  } else if (currentPageNumber === 3) {
    canvas.initCanvas();
    countDownSeconds();
  }
}

// This function displays the next card/page and increments the current page number
function changePage() {
  clickSound.play();
  cards[currentPageNumber].classList.remove("card--visible");
  cards[nextPageNumber].classList.add("card--visible");
  currentPageNumber++;
  nextPageNumber++;
  updateContentBasedOnPageNumber();
}

// This function checkes if the user have guessed the correct animal and calls for function to display winning or loosing condition
function compareGuessToAnswer() {
  if (userInput.value.toLowerCase() === randomAnimal.toLowerCase()) {
    showWinningCondition();
  } else {
    showLosingCondition();
  }
}

// Play again button that reloads the page
playAgainBtn.addEventListener("click", function () {
  clickSound.play();
  location.reload();
});

// Submit button for user to submit their guess
submitGuessBtn.addEventListener("click", function () {
  clickSound.play();
  let userGuess = userInput.value.toLowerCase();
  if (lettersInAlphabet.test(userGuess)) {
    inputContentWrapper.classList.remove("input__content-wrapper--visible");
    conditionsWrapperEl.classList.add("condition--visible");
    compareGuessToAnswer();
  } else {
    userInput.value = "";
  }
});

for (let nextPageButton of nextPageButtons) {
  nextPageButton.addEventListener("click", changePage);
}

// Initial redering
checkForPrevSavedCanvasImages();
displayGalleryImages();

// Call touchhandler function when initializing your game
canvas.initTouchHandlers();
