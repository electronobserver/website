fetch('/scripts/splash.json')
    .then(response => response.json())
    .then(quotes => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("splash-text").textContent = quotes[randomIndex];
    });