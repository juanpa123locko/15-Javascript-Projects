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