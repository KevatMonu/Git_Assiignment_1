// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

function closeMenu() {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.innerHTML = isOpen
        ? '<i class="ri-close-line"></i>'
        : '<i class="ri-menu-3-line"></i>';
});

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});


// Close the menu when clicking outside it.

document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll(
    "#home, #features, #workflow, #about"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const currentId = entry.target.id;

            navItems.forEach((link) => {
                const isActive =
                    link.getAttribute("href") === `#${currentId}`;

                link.classList.toggle("active", isActive);
            });
        });
    },
    {
        rootMargin: "-20% 0px -65% 0px"
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "%cGit & GitHub Landing Page",
    "color: #a78bfa; font-size: 18px; font-weight: bold;"
);

console.log(
    "%cBuilt with HTML, CSS and JavaScript.",
    "color: #61e6a5; font-size: 12px;"
);

// HEllo fejhvghcghchjsdkyucvhshcj