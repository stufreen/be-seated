import * as animol from "animol";

let lastScroll = window.scrollY;
let state = "hidden";

const showMenus = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    animol.css(
      menus[i],
      500,
      {transform: {translateY: "-100%"}},
      {transform: {translateY: "0%"}},
      animol.Easing.easeOutCubic
    );
  }
};

const hideMenus = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    animol.css(
      menus[i],
      500,
      {transform: {translateY: "0%"}},
      {transform: {translateY: "-100%"}},
      animol.Easing.easeIn
    );
  }
};

const handleScroll = (menus) => {
  const newScroll = window.scrollY;
  const hideThreshold = 1;

  if (newScroll > hideThreshold && newScroll < lastScroll && state === "hidden") {
    state = "open";
    showMenus(menus);
  } else if ((newScroll <= hideThreshold || newScroll >= lastScroll) && state === "open") {
    state = "hidden";
    hideMenus(menus);
  }

  lastScroll = newScroll;
};

export default function initializeDesktopMenu(className) {
  const menus = document.getElementsByClassName(className);
  window.addEventListener("scroll", () => {
    handleScroll(menus);
  });
}
