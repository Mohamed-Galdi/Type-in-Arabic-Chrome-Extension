let active = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "setState") {
    active = message.state;
  }
});

document.addEventListener("keydown", (event) => {
  if (!active) return;

  const arabicMap = {
    a: "ا",
    b: "ب",
    t: "ت",
    T: "ث",
    j: "ج",
    7: "ح",
    K: "خ",
    d: "د",
    D: "ذ",
    r: "ر",
    z: "ز",
    s: "س",
    H: "ش",
    S: "ص",
    Z: "ض",
    T: "ط",
    //   dh: "ظ",
    G: "ع",
    R: "غ",
    f: "ف",
    q: "ق",
    k: "ك",
    l: "ل",
    m: "م",
    n: "ن",
    h: "ه",
    o: "و",
    y: "ي",
    e: "ؤ",
    i: "إ",
    Y: "ئ",
    //   aa: "آ",
    //   oo: "ة",
  };

  if (arabicMap[event.key]) {
    event.preventDefault();
    const activeElement = document.activeElement;
    if (
      activeElement.tagName === "TEXTAREA" ||
      activeElement.tagName === "INPUT"
    ) {
      insertTextAtCursor(activeElement, arabicMap[event.key]);
    }
  }
});

function insertTextAtCursor(element, text) {
  const start = element.selectionStart;
  const end = element.selectionEnd;
  const textBefore = element.value.substring(0, start);
  const textAfter = element.value.substring(end);

  element.value = textBefore + text + textAfter;
  element.selectionStart = element.selectionEnd = start + text.length;

  // Dispatch an input event to ensure that any listeners are aware of the change
  element.dispatchEvent(new Event("input", { bubbles: true }));
}
