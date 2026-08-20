/* =========================================================
   FORWARD GUARD
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        });

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mainNav.classList.remove("active");
            });

        });

    }


    /* =====================================================
       LIVE CLOCK
    ===================================================== */

    const clock = document.getElementById("liveClock");

    function updateClock() {

        if (!clock) return;

        const now = new Date();

        const time = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        clock.textContent = time;

    }

    updateClock();

    setInterval(updateClock, 1000);


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight = 75;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       FORM DEMONSTRATION
    ===================================================== */

    const toast = document.getElementById("toast");


    function showToast(message) {

        if (!toast) return;

        const text = toast.querySelector("span");

        if (text) {
            text.textContent = message;
        }

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);

    }


    const applicationForm =
        document.getElementById("applicationForm");

    if (applicationForm) {

        applicationForm.addEventListener("submit", event => {

            event.preventDefault();

            showToast(
                "Expression of interest received for demonstration purposes."
            );

            applicationForm.reset();

        });

    }


    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            showToast(
                "Message received for demonstration purposes."
            );

            contactForm.reset();

        });

    }


    /* =====================================================
       PAUSE TICKER WHEN USER HOVERS
    ===================================================== */

    const tickerTrack =
        document.getElementById("tickerTrack");

    if (tickerTrack) {

        tickerTrack.addEventListener("mouseenter", () => {
            tickerTrack.style.animationPlayState = "paused";
        });

        tickerTrack.addEventListener("mouseleave", () => {
            tickerTrack.style.animationPlayState = "running";
        });

    }


    /* =====================================================
       INTERSECTION ANIMATION
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".support-card, .mission-card, .dashboard-card, .opportunity-card, .news-card"
        );

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.08
        });


    animatedElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(15px)";
        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });


    /* =====================================================
       FILTER BUTTON DEMO
    ===================================================== */

    const filterButton =
        document.querySelector(".filter-button");

    if (filterButton) {

        filterButton.addEventListener("click", () => {

            showToast(
                "Public-information filters are ready for API integration."
            );

        });

    }


});
