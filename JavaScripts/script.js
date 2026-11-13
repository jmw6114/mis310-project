const button = document.querySelector("#info-button");
const message = document.querySelector("#event-message");

button.addEventListener("click", function () {
    message.textContent = "Join us Friday at 2 PM!";
});
