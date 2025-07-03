document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");

    questions.forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;

            document.querySelectorAll(".answer").forEach((el) => {
                if (el !== answer) {
                    el.classList.remove("show");
                    el.classList.add("hidden");
                    el.previousElementSibling.classList.remove("active");
                }
            });

            answer.classList.toggle("show");
            answer.classList.toggle("hidden");
            button.classList.add("active");
        });
    });
});