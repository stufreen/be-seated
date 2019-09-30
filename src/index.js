import "./css/main.scss";
import initializeDesktopMenu from "./js/desktop-menu";

// Wait for document to load
(function() {
  if (document.readyState !== "loading") {
    initializeDesktopMenu("bs_desktopMenu");
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      initializeDesktopMenu("bs_desktopMenu");
    });
  }
}());
