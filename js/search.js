import { 
    SHOW_CLASS, 
    HIDE_CLASS,
    FADE_IN_CLASS,
    FADE_OUT_CLASS 
} from "./constants.js";

const FADE_TIMER = 300;

const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
    const currentValue = e.target.value.toLowerCase();
    const memberProfiles = document.querySelectorAll(".members-profile");
  
    memberProfiles.forEach((memberProfile) => {
        const memberName = memberProfile.querySelector(".member-name");
      if (memberName.textContent.toLowerCase().includes(currentValue)) {
        setTimeout(() => {
            memberProfile.classList.remove(HIDE_CLASS);
            memberProfile.classList.add(SHOW_CLASS);
        }, FADE_TIMER);

        memberProfile.classList.add(FADE_IN_CLASS);
        memberProfile.classList.remove(FADE_OUT_CLASS);
      } else {
        setTimeout(() => {
            memberProfile.classList.remove(SHOW_CLASS);
            memberProfile.classList.add(HIDE_CLASS);
        }, FADE_TIMER);

        memberProfile.classList.add(FADE_OUT_CLASS);
        memberProfile.classList.remove(FADE_IN_CLASS);
      }
    });
  });