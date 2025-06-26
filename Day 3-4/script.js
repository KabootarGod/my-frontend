const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const checkbox = document.querySelector("#agreement");

form.addEventListener ("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }
    if (!checkbox.checked) {
        alert("You must agree to the Terms and Conditions.");
        return;
    }

    alert(`Thank you for subscribing, ${email}! 🎉`);

    form.reset();
});