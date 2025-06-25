document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const navLinks = mobileNavOverlay.querySelectorAll('a');

    if (mobileMenuButton && mobileNavOverlay) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNavOverlay.classList.toggle('open');
            // Optional: Toggle body scroll
            // document.body.classList.toggle('no-scroll');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNavOverlay.classList.contains('open')) {
                    mobileNavOverlay.classList.remove('open');
                    // document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // Update Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Sticky Header
    const header = document.getElementById('header');
    if (header) {
        const sticky = header.offsetTop;
        window.onscroll = function() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };
    }
});
