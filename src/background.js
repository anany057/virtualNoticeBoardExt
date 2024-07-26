/* global chrome */

chrome.runtime.onInstalled.addListener(() => {
  console.log("Digital Notice Board extension installed.");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "get-data") {
    sendResponse({ data: "Some data from background" });
  }
});
