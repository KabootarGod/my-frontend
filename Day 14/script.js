document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-switch");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
