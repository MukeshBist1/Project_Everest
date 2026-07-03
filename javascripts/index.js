// index.js

function loadHTML(id, file, callback) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (typeof callback === "function") {
        callback();
      }
    })
    .catch(error => console.error("Error loading file:", error));
}

// Load header, then run its init function
loadHTML("header", "html/header.html", () => {
  if (typeof initHeader === "function") {
    initHeader();
  }
});

// Load homepage, then run its init function (e.g. Swiper setup)
loadHTML("homepage", "html/homepage.html", () => {
  if (typeof initHomepage === "function") {
    initHomepage();
  }
});

// Load footer (no init needed unless you add one)
loadHTML("footer", "html/footer.html");