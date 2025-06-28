document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const passwordtoggle = document.querySelector("#togglepassword");
    const emailError = emailInput.nextElementSibling;
    const passwordError = passwordInput.nextElementSibling;
    const statusMessage = document.querySelector("#status-message");

    passwordtoggle.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        togglepassword.textContent = type === "password" ? "👁️" : "🙈";
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        emailError.textContent = "";
        passwordError.textContent = "";
        statusMessage.textContent = "";

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isvalid = true;

        if (!email) {
            emailError.textContent = "Email is required.";
            isvalid = false;
        }
        if (!password) {
            passwordError.textContent = "Password is required.";
            isvalid = false;
        }

        if (!isvalid) return;

        statusMessage.textContent = `Welcome back, ${email}! 🎉`;
        statusMessage.style.color = "#16a34a";

        form.reset();
    });
});