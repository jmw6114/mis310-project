const button = document.querySelector("#form-button");
const form = document.querySelector("#urban-legends-form");

console.log("JavaScript formScript is connected.");

button.addEventListener("click", function () {
    form.classList.toggle("visible");
});
