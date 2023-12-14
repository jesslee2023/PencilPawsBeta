import { displayGalleryImages } from "./gallery.js";
import { conditionMessageEl, conditionStatusEl } from "./constants.js";
import { randomAnimal } from "./script.js";

// This is the winning condition
export function showWinningCondition() {
  conditionStatusEl.innerText = "Correct!";
  conditionMessageEl.innerText = "You are the best!";
  displayGalleryImages();
}
// This is the loosing condition
export function showLosingCondition() {
  conditionStatusEl.innerText = "Wrong!";
  conditionMessageEl.innerText = `The correct answer is ${randomAnimal}!`;
  displayGalleryImages();
}
