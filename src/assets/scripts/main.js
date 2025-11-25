/*
 * Text Scramble by Justin Windle (soulwire)
 * source: (https://codepen.io/soulwire/pen/mErPAK) 
 */
class textScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

function displayLogo() {
    const logoFile = new Request('/assets/scripts/logo.txt');
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

function indexAnim() {
    const title = document.getElementById('js-title');
    new textScramble(title).setText('ELECTRON OBSERVER');

    const quotesFile = new Request('/assets/scripts/splash.json');
    fetch(quotesFile)
        .then(response => response.json())
        .then(quotes => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("js-splash-text").textContent = quotes[randomIndex];
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // GLightbox config settings
    GLightbox({
        selector: '.glightbox',
        loop: true,
        autoplayVideos: false,
        descPosition: 'left'
    });

    // for OpenHeart reacts on photos and posts 
    const ohElement = document.getElementById('js-openheart');
    if (!ohElement) return;

    async function ohCountUpdate() {
        try {
            const res = await fetch(ohElement.href);
            if (!res.ok) return;

            const data = await res.json();
            const emoji = ohElement.getAttribute('emoji');
            const count = data[emoji] || 0;

            ohElement.querySelectorAll('.off, .on').forEach(span => {
                span.setAttribute('count', '(' + count + ')');
            });
        } catch (err) {
            console.error(err);
        }
    }

    ohCountUpdate();
    ohElement.addEventListener('js-openheart', ohCountUpdate);    
});

if (window.location.pathname=='/index'|| window.location.pathname=='/') {
    indexAnim();
} else if (window.location.pathname.startsWith('/posts')) {
    readTime();
}

navbarToggle();
displayLogo();