let messageEl = document.getElementById("message-el");
const buttonEl = document.getElementById("button-el"),
  displayEl = document.getElementById("display-el");

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();
  displayEl.textContent = messageEl.value;
  messageEl.value = "";
});
