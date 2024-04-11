const slideBtn = document.getElementById("slidebtn");
const slider = document.getElementById("slider");
const langg = document.getElementById("langg");
const kaz = document.getElementById("kaz");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const dot = document.getElementById("dot");
const swift = document.getElementById("swift");
const slidebtnNone = document.getElementById("slidebtnNone");
const newW = document.getElementById("newmenu");
const cross = document.getElementById("cros");
const right = document.getElementById("right");

const nav = function () {
  newW.classList.toggle("new--none");
  cross.classList.toggle("cros--none");
  right.classList.toggle("right");
};

newW.onclick = function () {
  nav();
};
cross.onclick = function () {
  nav();
};

slideBtn.onclick = function () {
  slider.classList.toggle("header--slide");
  slidebtnNone.classList.toggle("slidebtnNone");
};

langg.onclick = function () {
  langg.classList.toggle("menu--size");
  kaz.classList.toggle("kaz");
  swift.classList.toggle("swift");
};

let x = 0;
let y;
let num = 0;
arrow2.onclick = function () {
  if (num < 3) {
    x = x + 32;
    y = "(" + x + "px)";
    dot.style.transform = "translateX" + y;
    num = num + 1;
  } else {
    x = 0;
    y = "(" + x + "px)";
    dot.style.transform = "translateX" + y;
    num = 0;
  }
};

arrow1.onclick = function () {
  if (num > 0) {
    x = x - 32;
    y = "(" + x + "px)";
    dot.style.transform = "translateX" + y;
    num = num - 1;
  } else {
    x = 96;
    y = "(" + x + "px)";
    dot.style.transform = "translateX" + y;
    num = 3;
  }
};
