const button = document.querySelector("#form-button");
const form = document.querySelector("#urban-legends-form");

button.addEventListener("click", function () {
    form.classList.toggle("visible");
});
