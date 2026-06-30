console.log("JavaScript Connected Successfully!");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});
// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    reveals.forEach(section =>{

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

// ===============================
// LOGIN MODAL
// ===============================

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");

// Open Login Popup
loginBtn.addEventListener("click", () => {

    loginModal.classList.add("active");

});

// Close using × button
closeBtn.addEventListener("click", () => {

    loginModal.classList.remove("active");

});

// Close when clicking outside the popup
window.addEventListener("click", (e) => {

    if (e.target === loginModal) {

        loginModal.classList.remove("active");

    }

});

// Close using ESC key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        loginModal.classList.remove("active");

    }

});

const loginForm = document.querySelector(".login-box form");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login Successful! (Demo Only)");

    loginModal.classList.remove("active");

    loginForm.reset();

});