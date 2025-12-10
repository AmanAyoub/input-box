document.addEventListener("DOMContentLoaded", event => {
  let textField = document.querySelector(".text-field");
  let content = document.querySelector(".content");
  let blinkingCursor;

  textField.addEventListener("click", event => {
    event.stopPropagation();
    textField.classList.add("focused");
    if (!blinkingCursor) {
      blinkingCursor = setInterval(() => {
        textField.classList.toggle("cursor");
      }, 500);
    }
  });

  document.addEventListener("keydown", event => {
    if (textField.classList.contains("focused")) {
      if (event.key === "Backspace") {
        content.textContent = content.textContent.slice(0, -1);
      } else if (event.key.length === 1) {
        content.textContent += event.key;
      }
    }
  });

  document.addEventListener("click", event => {
    clearInterval(blinkingCursor);
    textField.classList.remove("focused");
    textField.classList.remove("cursor");
    blinkingCursor = null;
  });
});