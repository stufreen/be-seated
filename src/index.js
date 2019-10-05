import "./css/main.scss";
import initializeScrollHide from "./js/scroll-hide-menu";
import initializeMobileDrawer from "./js/mobile-menu-drawer";

function onLoad() {
  initializeScrollHide("bs_menu");
  initializeMobileDrawer();
}

// Wait for document to load
(function() {
  if (document.readyState !== "loading") {
    onLoad();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      onLoad();
    });
  }
}());
