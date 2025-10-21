
    const timeEl = document.getElementById("currentTime");
    const dateEl = document.getElementById("currentDate");
    const dayEl = document.getElementById("currentDay");
    const tzEl = document.getElementById("timezone");

    function updateTime() {
      const now = new Date();

      // Time
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      timeEl.textContent = `${hours}:${minutes}:${seconds}`;

      // Date
      const options = { year: "numeric", month: "long", day: "numeric" };
      dateEl.textContent = now.toLocaleDateString(undefined, options);

      // Day of week
      const dayOptions = { weekday: "long" };
      dayEl.textContent = now.toLocaleDateString(undefined, dayOptions);

      // Timezone
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        tzEl.textContent = tz;
      } catch {
        tzEl.textContent = "Local Timezone";
      }
    }

    updateTime();
    setInterval(updateTime, 1000);
    