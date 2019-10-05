export default function initializeMobileMenu() {
  const opener = document.getElementById("mobile-menu-opener");
  const closer = document.getElementById("mobile-menu-closer");
  const drawer = document.getElementById("mobile-menu-drawer");

  opener.addEventListener("click", () => {
    drawer.classList.add("open");
    document.body.classList.add("mobile-drawer-open");
  });

  closer.addEventListener("click", () => {
    drawer.classList.remove("open");
    document.body.classList.remove("mobile-drawer-open");
  });
}
