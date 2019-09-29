import "./css/main.scss";
import initializeDesktopMenu from "./js/desktop-menu";

// Wait for document to load
(function() {
  if (document.readyState !== "loading") {
    initializeDesktopMenu("scroll-hide");
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      initializeDesktopMenu("scroll-hide");
    });
  }
}());
