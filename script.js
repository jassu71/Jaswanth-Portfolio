// Get the menu button and navigation links.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open or close the mobile navigation menu.
menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    // Update the accessibility attributes.
    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    // Change the menu icon.
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close the menu after clicking a navigation link.
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

        menuToggle.textContent = "☰";

    });

});

// Automatically display the current year.
document.getElementById("year").textContent =
    new Date().getFullYear();