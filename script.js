/*=========================================
SMOOTH ACTIVE NAVIGATION
=========================================*/

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

/*=========================================
NAVBAR SHADOW ON SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
        navbar.style.background = "rgba(248,227,196,.96)";

    } else {

        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
        navbar.style.background = "rgba(248,227,196,.92)";

    }

});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(
    ".about-card,.product-card,.why-card,.industry-card,.gallery-item,.certificate-card,.contact-box"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*=========================================
TIMELINE ANIMATION
=========================================*/

const steps = document.querySelectorAll(".timeline-step");

let activeStep = 0;

function animateTimeline() {

    steps.forEach(step => {

        step.querySelector(".circle").style.background = "#CF6E6C";

        step.querySelector(".circle").style.transform = "scale(1)";

    });

    steps[activeStep].querySelector(".circle").style.background = "#5D6973";

    steps[activeStep].querySelector(".circle").style.transform = "scale(1.18)";

    activeStep++;

    if (activeStep >= steps.length) {

        activeStep = 0;

    }

}

let timelineInterval = setInterval(animateTimeline, 1200);

const timeline = document.querySelector(".timeline");

timeline.addEventListener("mouseenter", () => {

    clearInterval(timelineInterval);

});

timeline.addEventListener("mouseleave", () => {

    timelineInterval = setInterval(animateTimeline, 1200);

});

/*=========================================
PRODUCT CAROUSEL
=========================================*/

const track = document.querySelector(".product-track");

track.addEventListener("mouseenter", () => {

    track.style.animationPlayState = "paused";

});

track.addEventListener("mouseleave", () => {

    track.style.animationPlayState = "running";

});

/*=========================================
HERO BUTTON RIPPLE
=========================================*/

const buttons = document.querySelectorAll(".btn-primary,.btn-secondary,.contact-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.04)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

/*=========================================
LOGO HOVER
=========================================*/

const logo = document.querySelector(".logo img");

logo.addEventListener("mouseenter", () => {

    logo.style.transform = "rotate(-10deg) scale(1.12)";
    logo.style.filter = "drop-shadow(0 0 12px rgba(207,110,108,.8))";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "rotate(0deg) scale(1)";
    logo.style.filter = "none";

});

/*=========================================
GALLERY IMAGE ZOOM
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.12)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*=========================================
SCROLL TO TOP AFTER REFRESH
=========================================*/

window.onbeforeunload = function () {

    window.scrollTo(0, 0);

};

/*=========================================
CURRENT YEAR
=========================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Vrindavan Accessories India. All Rights Reserved.`;

}