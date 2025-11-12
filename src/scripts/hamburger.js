const navElement = document.querySelector('.nav');
const hamElement = document.querySelector('.hamburger');
    hamElement.addEventListener('click', () => {
        navElement.classList.toggle('nav--open');
        hamElement.classList.toggle('hamburger--open');
    });
