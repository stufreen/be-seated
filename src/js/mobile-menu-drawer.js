import * as animol from "animol";

export default function initializeMobileMenu() {
  const opener = document.getElementById("mobile-menu-opener");
  const closer = document.getElementById("mobile-menu-closer");
  const drawer = document.getElementById("mobile-menu-drawer");
  const animatedItems = document.getElementsByClassName("bs_mobileMenu_animatedItem");

  opener.addEventListener("click", () => {
    drawer.classList.add("open");
    document.body.classList.add("mobile-drawer-open");

    for (let i = 0; i < animatedItems.length; i++) {
      animatedItems[i].style.opacity = 0;
      animol.css(
        animatedItems[i],
        300,
        {transform: {translateX: "-0.5rem", rotateX: "10deg"}, opacity: 0},
        {transform: {translateX: "0rem", rotateX: "0deg"}, opacity: 1},
        animol.Easing.easeOutCubic,
        30 * i
      );
    }
  });

  closer.addEventListener("click", () => {
    drawer.classList.remove("open");
    document.body.classList.remove("mobile-drawer-open");
  });
}
