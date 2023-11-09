// Get references to the button, header, and content area
const darkMode = document.getElementById("darkMode");
const header = document.querySelector("header");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

// Define a function to toggle dark mode
function toggleDarkMode() {
  // Check if dark mode is currently active
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Toggle the dark mode by adding or removing the "dark-mode" class
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    header.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    body.style.backgroundColor = "#f0f0f0";
    body.style.color = "#000000";
  } else {
    document.body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    body.style.backgroundColor = "#1a1a1a";
    body.style.color = "#ffffff";
  }
}

// Add a click event listener to the button
darkMode.addEventListener("click", toggleDarkMode);
