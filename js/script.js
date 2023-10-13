import {
  SHOW_CLASS,
  HIDE_CLASS,
  CHANGE_CLASS,
  ACTIVE_CLASS,
  GREEN_COLOR_CLASS,
} from "./constants.js";

const toggleTextOn = document.querySelectorAll(".toggle-text--on");
const toggleTextOff = document.querySelectorAll(".toggle-text--off");
const toggleSwitches = document.querySelectorAll(".white-circle");

const emailBtn = document.querySelector(".email-btn").firstElementChild;
const profileBtn = document.querySelector(".public-btn").firstElementChild;

const timeSelect = document.querySelector(".time-select");

const getLocalStorage = (key) => localStorage.getItem(key);
const setLocalStorage = (key, value) => localStorage.setItem(key, value);

const EMAIL_KEY = "EMAIL_KEY";
const PROFILE_KEY = "PROFILE_KEY";
const TIME_ZONE_KEY = "TIME_ZONE_KEY";

let emailTextContent = null;
let profileTextContent = null;
let timeZoneValue = null;

function turnOffButton(toggleSwitch, toggleTextOff, toggleTextOn) {
  toggleTextOff.classList.remove(HIDE_CLASS);
  toggleTextOff.classList.add(SHOW_CLASS);
  toggleTextOff.classList.add(CHANGE_CLASS);

  toggleTextOn.classList.remove(SHOW_CLASS);
  toggleTextOn.classList.add(HIDE_CLASS);
  toggleTextOn.classList.add(CHANGE_CLASS);

  toggleSwitch.classList.add(CHANGE_CLASS);
  toggleSwitch.classList.add(GREEN_COLOR_CLASS);
}

function turnOnButton(toggleSwitch, toggleTextOff, toggleTextOn) {
  toggleTextOn.classList.remove(HIDE_CLASS);
  toggleTextOn.classList.add(SHOW_CLASS);
  toggleTextOn.classList.remove(CHANGE_CLASS);

  toggleTextOff.classList.add(HIDE_CLASS);
  toggleTextOff.classList.remove(SHOW_CLASS);
  toggleTextOff.classList.remove(CHANGE_CLASS);

  toggleSwitch.classList.remove(CHANGE_CLASS);
  toggleSwitch.classList.remove(GREEN_COLOR_CLASS);
}

function manualToggleSwitcher(toggleSwitch, toggleTextOff, toggleTextOn, inputValue) {
  if (toggleTextOff.classList.contains(HIDE_CLASS)) {
    turnOffButton(toggleSwitch, toggleTextOff, toggleTextOn);
    inputValue = toggleTextOff.textContent;
  } else {
    turnOnButton(toggleSwitch, toggleTextOff, toggleTextOn);
    inputValue = toggleTextOn.textContent;
  }
}

function storageToggleSwitcher(toggleSwitch, toggleTextOff, toggleTextOn, storedInputValue) {
  if (storedInputValue === toggleTextOn.textContent) {
    turnOnButton(toggleSwitch, toggleTextOff, toggleTextOn);
  } else {
    turnOffButton(toggleSwitch, toggleTextOff, toggleTextOn);
  }
}

toggleSwitches[0].addEventListener("click", (e) => {
  if (e.target.classList.contains("white-circle")) {
    manualToggleSwitcher(
      e.target,
      toggleTextOff[0],
      toggleTextOn[0],
      emailTextContent
    );
  }
});

toggleSwitches[1].addEventListener("click", (e) => {
  if (e.target.classList.contains("white-circle")) {
    manualToggleSwitcher(
      e.target,
      toggleTextOff[1],
      toggleTextOn[1],
      profileTextContent
    );
  }
});

function toggleTimezoneMenu(selectMenu, selectedOption) {
  const optionsArray = [...selectMenu.options];
  const matchedOption = optionsArray.find(
    (option) => option.value === selectedOption
  );

  if (selectedOption && matchedOption) {
    matchedOption.setAttribute("selected", true);
    return matchedOption.value;
  }
}

timeSelect.addEventListener("click", (e) => {
  const selectedOptionValue = e.target.value;

  if (selectedOptionValue && !selectedOptionValue.includes("Select")) {
    timeZoneValue = toggleTimezoneMenu(timeSelect, selectedOptionValue);
  }
});

if (getLocalStorage(TIME_ZONE_KEY)) {
  const lastTz = getLocalStorage(TIME_ZONE_KEY);
  toggleTimezoneMenu(timeSelect, lastTz);
}

if (getLocalStorage(EMAIL_KEY)) {
  const lastToggle = getLocalStorage(EMAIL_KEY);
  storageToggleSwitcher(emailBtn, toggleTextOff[0], toggleTextOn[0], lastToggle);
}

if (getLocalStorage(PROFILE_KEY)) {
  const lastToggle = getLocalStorage(PROFILE_KEY);
  storageToggleSwitcher(profileBtn, toggleTextOff[1], toggleTextOn[1], lastToggle);
}

function toggleSwitcherReset(toggleSwitch, toggleTextOff, toggleTextOn) {
  toggleTextOn.classList.remove(HIDE_CLASS);
  toggleTextOn.classList.add(SHOW_CLASS);
  toggleTextOn.classList.remove(CHANGE_CLASS);

  toggleTextOff.classList.add(HIDE_CLASS);
  toggleTextOff.classList.remove(SHOW_CLASS);
  toggleTextOff.classList.remove(CHANGE_CLASS);

  toggleSwitch.classList.remove(CHANGE_CLASS);
  toggleSwitch.classList.remove(GREEN_COLOR_CLASS);
}

const cancelButton = document.querySelector(".cancel-button");
cancelButton.addEventListener("click", () => {
  localStorage.removeItem(EMAIL_KEY);
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem(TIME_ZONE_KEY);

  timeSelect.parentElement.reset();

  const defaultOption = [...timeSelect.options].find(option => option.value.includes("Select"));
  defaultOption.setAttribute("selected", true);

  for (let i = 0; i < 2; i++) {
    toggleSwitcherReset(toggleSwitches[i], toggleTextOff[i], toggleTextOn[i]);
  }
});

const circleTextContent = (element) =>
  element?.parentElement?.querySelector(".show")?.textContent;

const saveButton = document.querySelector(".save-button");
saveButton.addEventListener("click", (e) => {
  const emailValue = circleTextContent(emailBtn);
  if (emailValue) {
    if (!getLocalStorage(EMAIL_KEY)) {
      setLocalStorage(EMAIL_KEY, emailValue);
    } else {
      setLocalStorage(EMAIL_KEY, emailValue);
    }
  }

  const profileValue = circleTextContent(profileBtn);
  if (profileValue) {
    if (!getLocalStorage(PROFILE_KEY)) {
      setLocalStorage(PROFILE_KEY, profileValue);
    } else {
      setLocalStorage(PROFILE_KEY, profileValue);
    }
  }

  const lastTimezone = timeZoneValue;
  if (lastTimezone) {
    if (!getLocalStorage(TIME_ZONE_KEY)) {
      setLocalStorage(TIME_ZONE_KEY, lastTimezone);
    } else {
      setLocalStorage(TIME_ZONE_KEY, lastTimezone);
    }
  }
});
