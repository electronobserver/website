function displayLogo() {
    const logoFile = new Request('/scripts/logo.txt');
    fetch(logoFile)
        .then(response => response.text())
        .then(console.log);
}

function navbarToggle() {
    const navElement = document.getElementById("js-navbar");
    const hamElement = document.getElementById("js-hamburger");
    hamElement.addEventListener('click', () => {
        navElement.classList.toggle('navbar--open');
        hamElement.classList.toggle('hamburger--open');
    });
}

function readTime() {
    const article = document.querySelectorAll('article')
    let numOfWords = 0;
    const averageWPM = 260;
    article.forEach(article => {
        numOfWords += article.innerHTML.split(" ").length;
    });
    let readTime = numOfWords / averageWPM
    document.getElementById("js-read-time").textContent = Math.ceil(readTime) + " " + "min read";
}

function splashText() {
    const quotesFile = new Request('/scripts/splash.json');
    fetch(quotesFile)
        .then(response => response.json())
        .then(quotes => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("js-splash-text").textContent = quotes[randomIndex];
        });
}

const footerYear = document.getElementById("js-footer-year");
footerYear.textContent = new Date().getFullYear();

// NOTE: The other GLightbox script needs to load first before initializing, adding this as a guard just to be safe
document.addEventListener('DOMContentLoaded', () => {
    GLightbox({
        selector: '.glightbox',
        loop: true,
        autoplayVideos: false
    });
});

if (window.location.pathname=='/index') {
    splashText();
} else if (window.location.pathname.startsWith('/posts')) {
    readTime();
}
navbarToggle();
displayLogo();

