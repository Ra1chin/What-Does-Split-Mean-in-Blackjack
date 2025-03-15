document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const faqButtons = document.querySelectorAll(".faq-question");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });

    // Close menu when clicking outside
    window.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove("open");
        }
    });

    // FAQ Toggle
    faqButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const faqItem = this.parentElement;
            
            // Close other open FAQ items
            document.querySelectorAll(".faq-item").forEach((item) => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });

            // Toggle the selected FAQ
            faqItem.classList.toggle("active");
        });
    });
});
