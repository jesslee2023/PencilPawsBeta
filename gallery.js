import { getImageUrl } from "./canvas.js";
import { randomAnimal } from "./script.js";

let galleryItemList = []; // Array containing all the image-URL's saved to local storage

// This function removes all the images in the image-gallery and then creates new image-elements for every image-Url we have stored in local storage.
export function displayGalleryImages() {
  const galleryWrapper = document.querySelector(".gallery-wrapper");

  galleryWrapper.innerHTML = "";

  for (let galleryItem of galleryItemList) {
    let galleryImg = document.createElement("img");
    let galleryText = document.createElement("p");
    let galleryContentWrapper = document.createElement("div");
    galleryContentWrapper.classList.add("gallery-content-wrapper");

    galleryImg.src = galleryItem.url;
    galleryText.textContent = galleryItem.animal;
    galleryWrapper.appendChild(galleryContentWrapper);

    galleryContentWrapper.appendChild(galleryImg);
    galleryContentWrapper.appendChild(galleryText);
  }
}

//This function saves the canvas-URL to an array called "galleryItemList" in the local storage
export function saveCanvasToLocalStorage() {
  let objectInfo = {
    url: "",
    animal: "",
  };
  let currentCanvasUrl = getImageUrl();

  objectInfo.url = currentCanvasUrl;
  objectInfo.animal = randomAnimal;
  galleryItemList.push(objectInfo);

  // galleryItemList.push(currentCanvasUrl);

  localStorage.setItem("galleryItemList", JSON.stringify(galleryItemList));
}

// This function checkes if there are any previously drawn images that should be displayed in the image-gallery
export function checkForPrevSavedCanvasImages() {
  if (localStorage.getItem("galleryItemList")) {
    galleryItemList = JSON.parse(localStorage.getItem("galleryItemList"));
  }
}
