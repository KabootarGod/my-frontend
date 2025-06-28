document.addEventListener ("DOMContentLoaded", () => {
    const counter = document.querySelector("#counter");
    const incrementBtn = document.querySelector("#increase");
    const decrementBtn = document.querySelector("#decrease");
    const resetBtn = document.querySelector("#reset");
    const message = document.querySelector("#message");

    let count = 0;

    function updateCounter() {
        counter.textContent = count;
        message.textContent = count < 0 ? "Count can not be negative" : "";
    }

    incrementBtn.addEventListener("click", () =>{
        count++;
        updateCounter();
    });

    decrementBtn.addEventListener("click", () =>{
        if (count > 0) {
            count--;
        }
        else {
            message.textContent = "Count cannot be negative!";
        }
        updateCounter();
    });

    resetBtn.addEventListener("click", () =>{
        count = 0;
        updateCounter();
    });
});