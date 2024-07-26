/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* global chrome */

// Ensure that the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const fullscreenButton = document.getElementById("fullscreenButton");

  // Check if the button exists before adding an event listener
  if (fullscreenButton) {
    fullscreenButton.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "enterFullScreen" });
    });
  }
});
