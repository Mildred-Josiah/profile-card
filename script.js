
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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Error fields
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorSubject = document.getElementById("error-subject");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop form from reloading

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset all error messages
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorSubject.textContent = "";
    errorMessage.textContent = "";
    successMessage.hidden = true;

    let valid = true;

    // ✅ Name validation
    if (name === "") {
      errorName.textContent = "Full name is required.";
      valid = false;
    }

    // ✅ Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      errorEmail.textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      errorEmail.textContent = "Please enter a valid email address.";
      valid = false;
    }

    // ✅ Subject validation
    if (subject === "") {
      errorSubject.textContent = "Subject is required.";
      valid = false;
    }

    // ✅ Message validation (at least 10 characters)
    if (message === "") {
      errorMessage.textContent = "Message is required.";
      valid = false;
    } else if (message.length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters long.";
      valid = false;
    }

    // ✅ If all fields are valid → show success message
    if (valid) {
      successMessage.hidden = false;
      form.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.hidden = true;
      }, 3000);
    }
  });
});

