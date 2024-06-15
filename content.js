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
    c: "ث",
    j: "ج",
    7: "ح",
    K: "خ",
    d: "د",
    p: "ذ",
    r: "ر",
    z: "ز",
    s: "س",
    H: "ش",
    S: "ص",
    D: "ض",
    T: "ط",
    Z: "ظ",
    g: "ع",
    G: "غ",
    f: "ف",
    q: "ق",
    k: "ك",
    l: "ل",
    m: "م",
    n: "ن",
    h: "ه",
    e: "و",
    i: "ي",
    x: "ء",
    A: "أ",
    y: "إ",
    E: "ؤ",
    Y: "ئ",
    o: "ة",
    w: "ى", 
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
