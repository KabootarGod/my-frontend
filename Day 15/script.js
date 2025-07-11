document.addEventListener("DOMContentLoaded", () => {
  const clockEl = document.getElementById("clock");
  const meridianEl = document.getElementById("meridian");
  const toggleBtn = document.getElementById("time-format");
  const darkModeBtn = document.getElementById("dark-mode");

  let is24Hour = false;

  function updateClock() {
    const now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let meridian = "AM";

    if (!is24Hour) {
      if (hrs > 12) {
        meridian = "PM";
        hrs -= 12;
      }
      if (hrs === 0) hrs = 12;
      meridianEl.textContent = meridian;
      meridianEl.classList.add("visible");
    } else {
      meridianEl.textContent = "";
      meridianEl.classList.remove("visible");
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    const timeString = `${hrs}:${min}:${sec}`;

    const clockH1 = clockEl.querySelector("h1");
    clockH1.textContent = timeString;

    clockH1.classList.add("updated");
    setTimeout(() => clockH1.classList.remove("updated"), 150);
  }

  toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "24 Hour Format" : "12 Hour Format";
    updateClock();
  });

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variables");
  });

  setInterval(updateClock, 1000);
  updateClock();
});
