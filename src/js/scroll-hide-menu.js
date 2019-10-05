let lastScroll = window.scrollY;
let state = "hidden";

function eachElement(elements, func) {
  for (let i = 0; i < elements.length; i++) {
    func(elements[i]);
  }
}

const handleScroll = (menus) => {
  const newScroll = window.scrollY;
  const hideThreshold = menus[0].clientHeight;

  if (newScroll > hideThreshold) {
    eachElement(menus, (menu) => {
      menu.classList.add("off-top");
    });
  } else {
    eachElement(menus, (menu) => {
      menu.classList.remove("off-top");
    });
  }

  if (newScroll < lastScroll && state === "hidden") {
    state = "open";
    eachElement(menus, (menu) => {
      menu.classList.add("scrolled-up");
    });
  } else if (newScroll >= lastScroll && state === "open") {
    state = "hidden";
    eachElement(menus, (menu) => {
      menu.classList.remove("scrolled-up");
    });
  }

  lastScroll = newScroll;
};

export default function initializeScrollHide(className) {
  const menus = document.getElementsByClassName(className);
  window.addEventListener("scroll", () => {
    handleScroll(menus);
  });
}
