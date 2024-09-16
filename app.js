const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelector('a[href="#getToKnowMore"]').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: document.querySelector('#getToKnowMore').offsetTop - 100, // Adjust offset value as needed
        behavior: 'smooth'
    });
});