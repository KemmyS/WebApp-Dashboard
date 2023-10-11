const search = document.getElementById("search");

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";
const FADE_IN_CLASS = "fade-in";
const FADE_OUT_CLASS = "fade-out";

const FADE_TIMER = 400;

// added eventListener in the search box
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