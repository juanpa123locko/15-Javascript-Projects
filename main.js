const btnnav = document.querySelector('.navbar-burger');
const navmenu = document.querySelector('.menu');
const body = document.querySelector('body');
btnnav.addEventListener('click', () => {
    body.classList.toggle('open');
console.log('click');
});