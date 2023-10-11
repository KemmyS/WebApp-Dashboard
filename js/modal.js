import { SHOW_CLASS, HIDE_CLASS } from "./constants.js";

const modals = document.querySelectorAll(".modal");
const notification = document.getElementById("alert");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const xIcon = document.querySelector(".x-icon");
const iconBell = document.querySelector(".svg-bell");
const iconBellDot = document.querySelector(".notification")

// inserted text content in the alert tab
message1.textContent = "Alert: You have an unread message";
message2.textContent = "Alert: You have 1 urgent email";

// Cloned message1 and it text context
const messageClone = message1.cloneNode(true);

// added Event Listener to the alert tab
let count = 0;
xIcon.addEventListener("click", (e) => {
  message1.remove();
  message2.style.display = "block";
  count++;
  if (count === 2) {
    notification.remove();
  }
});

// added Event Listener to the icon bell to show modals
// and remove notification dot
iconBell.addEventListener("click", (e) => {

  modals.forEach((modal) => {
    modal.classList.add(SHOW_CLASS);
    modal.classList.remove(HIDE_CLASS);
  });

  iconBellDot.classList.remove(SHOW_CLASS)
  iconBellDot.classList.add(HIDE_CLASS)

});

// function for the modal display to close tabs
function modalDisplay(modal){
  modal.addEventListener("click", (e) => {
    const clicked = e.target;
  
    if (clicked.classList.contains("close-tab")) {
  
      if (modal.classList.contains(SHOW_CLASS)) {
        modal.classList.remove(SHOW_CLASS);
        modal.classList.add(HIDE_CLASS);
      }
    }
  });
}

// called the modal display function
modals.forEach((m) => {
  modalDisplay(m)
});