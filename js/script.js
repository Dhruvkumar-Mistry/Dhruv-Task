// async function loadComponent(id, file) {
//     const response = await fetch(file);
//     const html = await response.text();
//     document.getElementById(id).innerHTML = html;
// }

// loadComponent("navbar", "components/navbar.html");
// loadComponent("hero", "components/hero.html");
// loadComponent("about", "components/about.html");
// loadComponent("services", "components/services.html");
// loadComponent("footer", "components/footer.html");

// const faqButtons = document.querySelectorAll(".faq-btn");

// faqButtons.forEach(button => {

//     button.addEventListener("click", () => {

//         const content = button.nextElementSibling;
//         const icon = button.querySelector(".faq-icon");

//         document.querySelectorAll(".faq-content").forEach(item => {
//             if (item !== content) {
//                 item.classList.add("hidden");
//             }
//         });

//         document.querySelectorAll(".faq-icon").forEach(i => {
//             if (i !== icon) i.textContent = "+";
//         });

//         content.classList.toggle("hidden");

//         icon.textContent = content.classList.contains("hidden")
//             ? "+"
//             : "×";

//     });

// });


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