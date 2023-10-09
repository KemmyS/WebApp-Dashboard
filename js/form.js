"use strict";

const SHOW_ERROR_CLASS = "show-error";
const HIDE_ERROR_CLASS = "hide-error";

const FADE_DOWN_CLASS = "fade-down";
const FADE_UP_CLASS = "fade-up";

const form = document.querySelector(".message-form");

const searchField = document.querySelector(".search-field");
const messageField = document.querySelector(".message-area");
messageField.value = ""

let searchInputValue;
let messageInputValue;

const searchError = document.querySelector(".form-error--name");
const messageError = document.querySelector(".form-error--message");

function showError(input, error) {
    if (!input) {
        error.classList.add(FADE_DOWN_CLASS);
        error.classList.add(SHOW_ERROR_CLASS);
    }
}

function hideError(input, error) {
    if (input.trim() !== "") {
        error.classList.remove(FADE_DOWN_CLASS);
        error.classList.remove(SHOW_ERROR_CLASS);
    }
}

searchField.addEventListener("input", (e) => {
    hideError(e.target.value, searchError);
});

searchField.addEventListener("change", (e) => {
    const value = e.target.value;
    showError(value, searchError);

    if (value) {
        console.log(`Search Value=${value}`);
        searchInputValue = value;
    }
});

messageField.addEventListener("input", (e) => {
    hideError(e.target.value, messageError);
});

messageField.addEventListener("change", (e) => {
    const value = e.target.value;
    showError(value, messageError);

    if(value) {
        console.log(`MSG Value=${value}`);
        messageInputValue = value;
    }
});

form.addEventListener("submit", (e) => {
   e.preventDefault(); 

   const form = e.target;
   if(searchInputValue && messageInputValue) {
    alert(JSON.stringify({
        name: searchInputValue,
        message: messageInputValue
    }));
    form.reset();
   } else {
    showError(searchInputValue, searchError);
    showError(messageInputValue, messageError);
   }
});
