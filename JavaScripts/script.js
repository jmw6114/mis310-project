const button = document.querySelector("#open/close-form");
const message = document.querySelector("#event-message");

button.addEventListener("click", function () {
    message.textContent = "Join us Friday at 2 PM!";
});
