
// ================= FAQ =================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-btn");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    button.addEventListener("click", () => {

        const isOpen = !content.classList.contains("hidden");

        // Close all items
        faqItems.forEach(faq => {

            faq.querySelector(".faq-content").classList.add("hidden");

            const faqIcon = faq.querySelector(".faq-icon");
            faqIcon.textContent = "keyboard_arrow_down";
            faqIcon.classList.remove("rotate-180");

            faq.querySelector(".faq-btn span:first-child")
                .classList.remove("text-secondary");

        });

        // Open current item
        if (!isOpen) {

            content.classList.remove("hidden");

            icon.textContent = "keyboard_arrow_down";
            icon.classList.add("rotate-180");

            button.querySelector("span:first-child")
                .classList.add("text-secondary");
        }

    });

});


// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.remove(
            "opacity-0",
            "pointer-events-none",
            "translate-y-5"
        );

        backToTop.classList.add(
            "opacity-100",
            "translate-y-0"
        );

    } else {

        backToTop.classList.add(
            "opacity-0",
            "pointer-events-none",
            "translate-y-5"
        );

        backToTop.classList.remove(
            "opacity-100",
            "translate-y-0"
        );
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Navbar animation
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-primary", "shadow-lg");
    } else {
        navbar.classList.remove("bg-primary", "shadow-lg");
        navbar.classList.add("bg-transparent");
    }

});

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-100%]");
});


// Accordion
document.querySelectorAll(".submenu-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const submenu = btn.nextElementSibling;
        const icon = btn.querySelector(".material-symbols-outlined");

        submenu.classList.toggle("hidden");

        icon.style.transform =
            submenu.classList.contains("hidden")
                ? "rotate(0deg)"
                : "rotate(180deg)";
    });

});

const images = [
    "assets/Standort.jpg",
    "assets/Standort.jpg",
    "assets/Standort.jpg",
    "assets/Standort.jpg"
];

const image = document.getElementById("sliderImage");
const indicators = document.querySelectorAll(".indicator");
const count = document.getElementById("slideCount");

let current = 0;

function updateSlider() {

    image.classList.add("opacity-0");

    setTimeout(() => {

        image.src = images[current];

        image.classList.remove("opacity-0");

    }, 300);

    indicators.forEach((item, index) => {
        item.classList.toggle("bg-primary", index === current);
        item.classList.toggle("bg-gray-300", index !== current);
    });

    count.textContent =
        `${String(current + 1).padStart(2, "0")}/${String(images.length).padStart(2, "0")}`;
}

setInterval(() => {
    current = (current + 1) % images.length;
    updateSlider();
}, 3000);

updateSlider();