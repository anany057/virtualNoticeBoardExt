/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* global chrome */

chrome.runtime.onInstalled.addListener(() => {
  console.log("Digital Notice Board extension installed.");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: enterFullScreen,
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "get-data") {
    sendResponse({ data: "Some data from background" });
  }
});

function enterFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    /* Firefox */
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    /* IE/Edge */
    document.documentElement.msRequestFullscreen();
  }
}
