document.addEventListener("DOMContentLoaded",  () => {
    const togglebutton = document.querySelector("#toggle");
    const body = document.body;

    togglebutton.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");
    });
});