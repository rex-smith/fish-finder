import "./reset.css";
import "./styles.css";
import Trout1 from "./images/trout-1.jpg";
import Trout2 from "./images/trout-2.jpg";
import Trout3 from "./images/trout-3.jpg";
import Salmon4 from "./images/salmon-4.jpeg";
import Trout5 from "./images/trout-5.jpg";

// Dropdown menus

const dropdownContainers = document.querySelectorAll(".full-dropdown");

for (let i = 0; i < dropdownContainers.length; i++) {
  dropdownContainers[i].addEventListener("mouseover", () => {
    dropdownContainers[i].children[1].classList.remove("hidden");
    dropdownContainers[i].children[0].classList.add("active");
  });
  dropdownContainers[i].addEventListener("mouseout", () => {
    dropdownContainers[i].children[1].classList.add("hidden");
    dropdownContainers[i].children[0].classList.remove("active");
  });
}

// Picture Slideshow

const pictureArray = [Trout1, Trout2, Trout3, Salmon4, Trout5];
const pictureContainer = document.querySelector(".picture-container");
const iconContainer = document.querySelector(".icon-container");

for (let i = 0; i < pictureArray.length; i++) {
  const picture = new Image();
  picture.src = pictureArray[i];
  picture.classList.add("fish-picture");
  picture.id = `fish-picture-${i}`;
  pictureContainer.appendChild(picture);
  const icon = document.createElement("div");
  icon.classList.add("picture-icon");
  icon.id = `pic-icon-${i}`;
  iconContainer.appendChild(icon);
}

function clearActivePicture() {
  const currentPicture = document.querySelector(".active-picture");
  if (currentPicture) {
    currentPicture.classList.remove("active-picture");
  }
}

function setActivePicture(pictureElement) {
  clearActivePicture();
  pictureElement.classList.add("active-picture");
}

function clearActiveIcon() {
  const currentIcon = document.querySelector(".active-icon");
  if (currentIcon) {
    currentIcon.classList.remove("active-icon");
  }
}

function setActiveIcon(iconElement) {
  clearActiveIcon();
  iconElement.classList.add("active-icon");
}

function showPicture(pictureElement) {
  setActivePicture(pictureElement);
  pictureContainer.style.left = `-${pictureElement.offsetLeft}px`;
  // ISSUE WITH HOW TO ASSOCIATE ICON WITH PICTURE
  const iconElement = document.querySelector(
    `#pic-icon-${pictureElement.id.split("-").pop()}`
  );
  setActiveIcon(iconElement);
}

function showNextPicture() {
  const currentPicture = document.querySelector(".active-picture");
  const nextPicture = currentPicture.nextElementSibling;
  if (nextPicture) {
    showPicture(nextPicture);
  } else {
    showPicture(pictureContainer.firstElementChild);
  }
}

function showPreviousPicture() {
  const currentPicture = document.querySelector(".active-picture");
  const previousPicture = currentPicture.previousElementSibling;
  if (previousPicture) {
    showPicture(previousPicture);
  } else {
    showPicture(pictureContainer.lastElementChild);
  }
}

// Arrow event listeners for clicks
// Icon event listeners for clicks

document.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.parentNode.classList.contains("hamburger")) {
    document.querySelector(".hamburger-menu").classList.toggle("hidden");
  }
  if (event.target.classList.contains("picture-icon")) {
    const iconId = event.target.id;
    const pictureElement = document.getElementById(
      `fish-picture-${iconId.split("-").pop()}`
    );
    showPicture(pictureElement);
  }

  if (event.target.parentNode.classList.contains("arrow-left")) {
    showPreviousPicture();
  }
  if (event.target.parentNode.classList.contains("arrow-right")) {
    showNextPicture();
  }
});

const interval = setInterval(() => {
  showNextPicture();
}, 5000);

showPicture(pictureContainer.firstElementChild);
interval;
