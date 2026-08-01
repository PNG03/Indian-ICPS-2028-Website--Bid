/*==================================================
                ICPS 2028
              Main JavaScript
==================================================*/


/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("loader-hidden");

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});


/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});


/*=========================================
        MOBILE MENU
=========================================*/

const menuButton = document.querySelector(".mobile-menu");

const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/*=========================================
        COUNTDOWN TIMER
=========================================*/

// =========================
// COUNTDOWN
// =========================

const targetDate = new Date("August 2, 2028 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("years").textContent = 0;
        document.getElementById("months").textContent = 0;
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;

        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let years = new Date(targetDate).getFullYear() - new Date(now).getFullYear();
    let months = new Date(targetDate).getMonth() - new Date(now).getMonth();

    let tempDate = new Date(now);

    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);

    if (tempDate > new Date(targetDate)) {
        months--;
        tempDate = new Date(now);
        tempDate.setFullYear(tempDate.getFullYear() + years);
        tempDate.setMonth(tempDate.getMonth() + months);
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const remaining = targetDate - tempDate.getTime();

    const days = Math.floor(remaining / day);
    const hours = Math.floor((remaining % day) / hour);
    const minutes = Math.floor((remaining % hour) / minute);
    const seconds = Math.floor((remaining % minute) / second);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);


/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(
    ".feature-card, .stat-box, .ready-card, .image-content, .text-content"
);

// Give every element the initial hidden state
reveals.forEach(item => item.classList.add("reveal"));

function revealOnScroll() {

    const trigger = window.innerHeight * 0.88;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            current &&

            link.getAttribute("href").includes(current)

        ) {

            link.classList.add("active");

        }

    });

});



/*=========================================
        HERO PARALLAX
=========================================*/

const heroImage = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    heroImage.style.transform =

        `translateY(${offset * 0.35}px) scale(1.08)`;

});



/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});



/*=========================================
        FEATURE CARD HOVER
=========================================*/

const cards = document.querySelectorAll(

    ".feature-card, .ready-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

            `radial-gradient(circle at ${x}px ${y}px,
            rgba(212,169,77,.12),
            rgba(255,255,255,1))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "white";

    });

});



/*=========================================
        SCROLL TO TOP
=========================================*/

const topButton = document.createElement("button");

topButton.innerHTML =

    '<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topButton";

document.body.appendChild(topButton);


topButton.style.cssText = `

position:fixed;
bottom:35px;
right:35px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#800000;
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 10px 30px rgba(0,0,0,.25);
transition:.35s;
z-index:999;

`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});