document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = document.getElementById("theme-icon");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode-variables");

    const isDark = body.classList.contains("dark-mode-variables");

    toggleIcon.textContent = isDark ? "light_mode" : "dark_mode";
  });
});
