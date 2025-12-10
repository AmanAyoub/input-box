document.addEventListener("DOMContentLoaded", event => {
  let textField = document.querySelector(".text-field");
  let blinkingCursor;

  textField.addEventListener("click", event => {
    event.stopPropagation();
    textField.classList.add("focused");

    blinkingCursor = setInterval(() => {
      textField.classList.toggle("cursor");
    }, 500);
  });

  document.addEventListener("click", event => {
    clearInterval(blinkingCursor);
    textField.classList.remove("focused");
    textField.classList.remove("cursor");

  });
});