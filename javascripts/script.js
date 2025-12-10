document.addEventListener("DOMContentLoaded", event => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener("click", event => {
    event.stopPropagation();
    textField.classList.add("focused");
  });

  document.addEventListener("click", event => {
    textField.classList.remove("focused");
  });
});