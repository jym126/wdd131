// Update footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const title = document.getElementById("title");
const header = document.querySelector("header");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuToggle.textContent = menu.classList.contains("hidden") ? "☰" : "✖";

    // Hide the title (when button shows "✖")
    if (menuToggle.textContent === "✖") {
        title.style.display = "none";
        header.style.justifyContent = "center";
    } else {
        title.style.display = ""; // Restore default behavior
        header.style.justifyContent = "";
    }
});
