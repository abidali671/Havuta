var linkedIn = document.querySelector("#linkedin");
var twitter = document.querySelector("#twitter");
var facebook = document.querySelector("#facebook");
var telegram = document.querySelector("#telegram");

// Hover Function

linkedIn.addEventListener("mouseenter", function () {
  linkedIn.src = "../images/linkedin-hover.png";
});
linkedIn.addEventListener("mouseleave", function () {
  linkedIn.src = "../images/linkedin.png";
});

twitter.addEventListener("mouseenter", function () {
  twitter.src = "../images/twitter-hover.png";
});
twitter.addEventListener("mouseleave", function () {
  twitter.src = "../images/twitter.png";
});

facebook.addEventListener("mouseenter", function () {
  facebook.src = "../images/facebook-hover.png";
});
facebook.addEventListener("mouseleave", function () {
  facebook.src = "../images/facebook.png";
});

telegram.addEventListener("mouseenter", function () {
  telegram.src = "../images/telegram-hover.png";
});
telegram.addEventListener("mouseleave", function () {
  telegram.src = "../images/telegram.png";
});

// Modal

var terms = document.querySelector("#terms");
var modalBox = document.querySelector("#modal-wrapper");
var modal = document.querySelector("#modal");
var modalClose = document.querySelector("#modal-close");

terms.addEventListener("click", function () {
  modalBox.style.display = "block";
});
modalClose.addEventListener("click", function () {
  modalBox.style.display = "none";
});
modalBox.addEventListener("click", function () {
  modalBox.style.display = "none";
});
modal.addEventListener("click", function () {
  modalBox.style.display = "block";
  console.log("hello");
});

// Modal 1
var policy = document.querySelector("#policy");
var modalBox1 = document.querySelector("#modal-wrapper-1");
var modalClose1 = document.querySelector("#modal-close-1");

policy.addEventListener("click", function () {
  modalBox1.style.display = "block";
});
modalClose1.addEventListener("click", function () {
  modalBox1.style.display = "none";
});
modalBox1.addEventListener("click", function () {
  modalBox1.style.display = "none";
});

// Form

var form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
