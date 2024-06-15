let active = false;

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.startsWith("chrome://")) {
    active = !active;
    updateIcon();

    // Inject content script and send state message
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["content.js"],
      },
      () => {
        chrome.tabs.sendMessage(tab.id, { action: "setState", state: active });
      }
    );
  } else {
    console.log("Cannot inject script into chrome:// URLs");
  }
});

function updateIcon() {
  const iconPath = active ? "icons/icon_color_" : "icons/icon_bw_";
  chrome.action.setIcon({
    path: {
      16: `${iconPath}16.png`,
      48: `${iconPath}48.png`,
      128: `${iconPath}128.png`,
    },
  });
}
