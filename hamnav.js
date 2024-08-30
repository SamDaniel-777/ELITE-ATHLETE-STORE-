document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const verticalNav = document.getElementById("vertical-nav");
    const closeBtn = document.getElementById("close-btn");

    // Open the vertical navigation menu
    hamburgerMenu.addEventListener("click", function() {
        verticalNav.style.width = "250px";
    });

    // Close the vertical navigation menu
    closeBtn.addEventListener("click", function() {
        verticalNav.style.width = "0";
    });
});
