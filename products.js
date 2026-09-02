/* =====================================================
   VAI PRODUCTS PAGE
   ===================================================== */


/* ==============================
   HEADER
   ============================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ==============================
   PRODUCT IMAGE REVEAL
   ============================== */

const cards = document.querySelectorAll(".gallery-card");

const cardObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            cardObserver.unobserve(entry.target);

        });

    },

    {
        threshold:0.12
    }

);


cards.forEach((card, index) => {

    card.style.transitionDelay = `${(index % 5) * 80}ms`;

    cardObserver.observe(card);

});


/* ==============================
   DIRECTORY SMOOTH SCROLL
   ============================== */

document.querySelectorAll(
    ".product-directory a"
).forEach(link => {

    link.addEventListener("click", function(event){

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        window.scrollTo({

            top:target.offsetTop - 110,

            behavior:"smooth"

        });

        history.replaceState(
            null,
            "",
            targetId
        );

    });

});


/* ==============================
   OPEN PRODUCT FROM HOME PAGE
   ============================== */

window.addEventListener("load", () => {

    const hash = window.location.hash;

    if (!hash) return;

    const target = document.querySelector(hash);

    if (!target) return;

    setTimeout(() => {

        window.scrollTo({

            top:target.offsetTop - 110,

            behavior:"smooth"

        });

    },300);

});