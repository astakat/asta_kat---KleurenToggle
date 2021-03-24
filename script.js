let selectButton = document.querySelector(".button");
let selectMenu = document.querySelector(".menu");

const seeMenu = function () {
  selectMenu.classList.add("menu-magic");
};
const hideMenu = function () {
  selectMenu.classList.remove("menu-magic");
};

selectButton.addEventListener("mouseenter", () => console.log("Mouse enter"));
selectButton.addEventListener("mouseenter", seeMenu);
selectButton.addEventListener("mouseleave", () => console.log("Mouse leave"));
selectButton.addEventListener("mouseleave", hideMenu);
selectMenu.addEventListener("click", hideMenu);
selectMenu.addEventListener("mouseenter", seeMenu);
selectMenu.addEventListener("mouseleave", hideMenu);

let redBackground = document.querySelector(".menu-red");
let selectBody = document.querySelector("body");

const removeClass = function () {
  if (selectBody.class !== null) selectBody.removeAttribute("class");
  console.log("removed class");
};

const addColor = function () {
  if (selectBody.class == null) selectBody.add("")
}

const makeBodyRed = function () {
  removeClass();
  selectBody.classList.add("menu-red");
};

redBackground.addEventListener("click", makeBodyRed);

let greenBackground = document.querySelector(".menu-green");

const makeBodyGreen = function () {
  removeClass();
  selectBody.classList.add("menu-green");
};

greenBackground.addEventListener("click", makeBodyGreen);

let orangeBackground = document.querySelector(".menu-orange");

const makeBodyOrange = function () {
  removeClass();
  selectBody.classList.add("menu-orange");
};

orangeBackground.addEventListener("click", makeBodyOrange);

let purpleBackground = document.querySelector(".menu-purple");

const makeBodyPurple = function (e) {
  console.log(e);
  removeClass();
  selectBody.classList.add("menu-purple");
};

purpleBackground.addEventListener("click", makeBodyPurple);

let homeBackground = document.querySelector(".menu-home");

const makeBodyHome = function (e) {
  console.log(e);
  removeClass();
  selectBody.classList.add("menu-home");
};

homeBackground.addEventListener("click", makeBodyHome);

document.addEventListener("keydown", (event) => {
  const keyName = event.keyCode;
  if (keyName === 49) {
    makeBodyHome();
  }
});

document.addEventListener("keydown", (event) => {
  const keyName = event.keyCode;
  if (keyName === 50) {
    makeBodyRed();
  }
});

document.addEventListener("keydown", (event) => {
  const keyName = event.keyCode;
  if (keyName === 51) {
    makeBodyGreen();
  }
});

document.addEventListener("keydown", (event) => {
  const keyName = event.keyCode;
  if (keyName === 52) {
    makeBodyOrange();
  }
});

document.addEventListener("keydown", (event) => {
  const keyName = event.keyCode;
  if (keyName === 53) {
    makeBodyPurple();
  }
});
