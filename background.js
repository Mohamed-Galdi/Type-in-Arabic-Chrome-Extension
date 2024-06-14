let isActive = false;

chrome.action.onClicked.addListener((tab) => {
  isActive = !isActive;
  updateIcon();

  // Inject content script and send state message
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ["content.js"],
    },
    () => {
      chrome.tabs.sendMessage(tab.id, { action: "setState", state: isActive });
    }
  );
});

function updateIcon() {
  const iconPath = isActive ? "icons/icon_color_" : "icons/icon_bw_";
  chrome.action.setIcon({
    path: {
      16: `${iconPath}16.png`,
      48: `${iconPath}48.png`,
      128: `${iconPath}128.png`,
    },
  });
}
