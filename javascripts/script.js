document.addEventListener("DOMContentLoaded", event => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener("click", event => {
    event.stopPropagation();
    textField.classList.add("focused");

    setInterval(() => {
      textField.classList.toggle("cursor");
    }, 500);
  });

  document.addEventListener("click", event => {
    textField.classList.remove("focused");
  });
});