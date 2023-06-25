const menuItems = document.getElementById("menu-items");
const menuToggle = () => {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
};

const key = document.getElementById("key");
const treasureHeading = document.getElementById("treasure-heading");
const treasureSubheading = document.getElementById("treasure-subheading");
const chest = document.getElementById("chest");

const openChest = () => {
  userAnswer = key.value;
  if (userAnswer === "password") {
    console.log(key);
    treasureHeading.innerHTML = "Congratulations!";
    treasureSubheading.innerHTML = "You have opened the treasure chest!";
    chest.src = "./images/treasurechest.png";
    chest.style.marginTop = "8rem";
  }
};
