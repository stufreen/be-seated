let lastScroll = window.scrollY;
let state = "hidden";

const showMenus = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.remove("hide");
  }
};

const hideMenus = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.add("hide");
  }
};

const fadeInMenus = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.remove("transparent");
  }
};

const fadeOutMenus = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.add("transparent");
  }
};


const handleScroll = (menus) => {
  const newScroll = window.scrollY;
  const hideThreshold = 0;

  if (newScroll <= hideThreshold) {
    state = "hidden";
    fadeOutMenus(menus);
  } else if (newScroll < lastScroll && state === "hidden") {
    state = "open";
    fadeInMenus(menus);
    showMenus(menus);
  } else if (newScroll >= lastScroll && state === "open") {
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
