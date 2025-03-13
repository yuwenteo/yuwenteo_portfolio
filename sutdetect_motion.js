document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveSection() {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120; // Adjust offset for sticky nav
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href").substring(1) === current;

            if (isActive) {
                link.classList.add("font-semibold", "text-black");
                link.classList.remove("text-gray-400");
            } else {
                link.classList.remove("font-semibold", "text-black");
                link.classList.add("text-gray-400");
            }
        });
    }

    // Run function immediately on page load to highlight active section
    updateActiveSection();

    // Smooth scroll when clicking a navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for sticky nav
                    behavior: "smooth",
                });

                // Immediately update active link
                setTimeout(() => {
                    updateActiveSection();
                }, 300);
            }
        });
    });

    // Update active section on scroll
    window.addEventListener("scroll", updateActiveSection);
});
