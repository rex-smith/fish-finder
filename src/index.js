import "./reset.css";
import "./styles.css";
import Trout1 from "./images/trout-1.jpg";
import Trout2 from "./images/trout-2.jpg";
import Trout3 from "./images/trout-3.jpg";
import Trout4 from "./images/trout-4.jpg";
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

const pictureArray = [Trout1, Trout2, Trout3, Trout4, Trout5];
const pictureContainer = document.querySelector(".picture-container");
pictureContainer.appendChild(Image(Trout1));

function showNextPicture() {}
