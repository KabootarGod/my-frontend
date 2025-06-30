    document.addEventListener ("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        const task_name = document.querySelector("#add-task-name");
        const task_list = document.querySelector("ul");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const task_text = task_name.value.trim();
            if (task_text === "") return

            const li = document.createElement("li");
            li.textContent = task_text;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList.add("delete-btn");

            li.appendChild(deleteBtn);

            task_list.appendChild(li);

            task_name.value = "";
        });

        task_list.addEventListener("click", function (event) {
            if (event.target.classList.contains("delete-btn")) {
                const li = event.target.parentElement;
                task_list.removeChild(li);
            }
        });
    });