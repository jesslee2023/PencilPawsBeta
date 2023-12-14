// Cards / Forms / Inputs
const clickSound = document.getElementById("clickSound");
const cards = document.querySelectorAll(".card"); // All cards/pages saved in an array
const inputContentWrapper = document.querySelector(".input__content-wrapper"); // The form that displays where the user can input guess
// const formGridRow = document.querySelector(".card__grid-wrapper");
const userInput = document.querySelector(".input"); // To store the user guess/input into a variable
const cardInformationCanvas = document.querySelector(
  "#card-infromation-canvas"
);

// Buttons
const nextPageButtons = document.querySelectorAll(".btn__next-page"); // All buttons that take you to the next card/page
const submitGuessBtn = document.querySelector(".btn__submit-guess"); // The button to submit guess
const playAgainBtn = document.querySelector(".btn__play-again");

// Winning / Loosing conditions
const conditionsWrapperEl = document.querySelector(".condition__wrapper");
const conditionStatusEl = document.querySelector(".condition__status");
const conditionMessageEl = document.querySelector(".condition__message");

// lettter in the Alphabet
const lettersInAlphabet = /^[a-z]+$/;

const animalWordEl = document.querySelector("#random-animal");
const loader = document.querySelector(".loader");

export {
  clickSound,
  cards,
  inputContentWrapper,
  userInput,
  cardInformationCanvas,
  nextPageButtons,
  submitGuessBtn,
  playAgainBtn,
  conditionsWrapperEl,
  conditionStatusEl,
  conditionMessageEl,
  lettersInAlphabet,
  animalWordEl,
  loader,
};
