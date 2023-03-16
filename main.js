const btnnav = document.querySelector('.navbar-burger');
const navmenu = document.querySelector('.menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.menu a');
btnnav.addEventListener('click', () => {
    body.classList.toggle('open');

});
links.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('open');
    });
});
// navbar transparent when scroll down
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarburger = document.querySelector('.navbar-burger');
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-transparent');
        navbarburger.classList.add('navbar-burger-dark');
    } else {
        navbar.classList.remove('navbar-transparent');
        navbarburger.classList.remove('navbar-burger-dark');
    }
});
// back to top button 
const backtotopbutton = document.querySelector('.backtotopbutton');
document.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        backtotopbutton.classList.add('visiblebutton');
    } else {
        backtotopbutton.classList.remove('visiblebutton');
    }
});
// AOS animation library
window.addEventListener('load', () => {
    AOS.init({
        duration: 500,
        // once: true,
        mirror: true,
    });
});
// get full year footer
const copyyear = document.querySelector('.copyright');
const currentyear = new Date().getFullYear();
copyyear.innerHTML = `© ${currentyear} All Rights Reserved`