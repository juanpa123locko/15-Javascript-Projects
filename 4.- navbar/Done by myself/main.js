// quiero que en una constante me seleccione
// el elemento con id navbar
// al momento de scroll se le agregue la clase
// fixed-top
// y que se le quite cuando el scroll sea 0

const navbar = document.getElementById('nav');
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});
