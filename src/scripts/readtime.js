var article = document.querySelectorAll('article')
const readTimeDiv = document.querySelector('.read-time')
const calculateReadTime = () => {
    let numOfWords = 0;
    const averageWPM = 260;
    article.forEach(article => {
        numOfWords += article.innerHTML.split(" ").length;
    });


    let readTime = numOfWords / averageWPM
    return readTimeDiv.innerHTML =  Math.ceil(readTime) + " " + "min read";
}
calculateReadTime();