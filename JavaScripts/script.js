const button = document.querySelector("#open/close-form");
const form = document.querySelector("#urban-legends-form");

button.addEventListener("click", function () {
    form.classList.toggle("visible");
});
