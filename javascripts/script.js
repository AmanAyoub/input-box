document.addEventListener("DOMContentLoaded", event => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener("click", event => {
    textField.classList.add("focused");
  });
});