let images = [];
let currentIndex = 0;
let preloaded = [];

fetch("carousel.json")
  .then(res => res.json())
  .then(data => {
    images = data.carousel;
    preloadImages();
    createCarousel();
    renderImage();
  });

/* -----------------------------
   PRELOAD IMAGES (KEY FIX)
------------------------------ */
function preloadImages() {
  images.forEach(item => {
    const img = new Image();
    img.src = item.image;
    preloaded.push(img);
  });
}

/* -----------------------------
   CREATE CAROUSEL
------------------------------ */
function createCarousel() {
  const main = document.getElementById("carousel");

  main.innerHTML = `
    <div class="carousel">
      <button class="nav prev">‹</button>

      <div class="carousel-frame">
        <img id="carousel-image" src="" alt="carousel image">
      </div>

      <button class="nav next">›</button>
    </div>
  `;

  document.querySelector(".prev").addEventListener("click", prev);
  document.querySelector(".next").addEventListener("click", next);
}

/* -----------------------------
   RENDER IMAGE WITH FADE
------------------------------ */
function renderImage() {
  const img = document.getElementById("carousel-image");

  img.style.opacity = "0";

  setTimeout(() => {
    img.src = images[currentIndex].image;
    img.style.opacity = "1";
  }, 180);
}

/* -----------------------------
   CONTROLS
------------------------------ */
function next() {
  currentIndex = (currentIndex + 1) % images.length;
  renderImage();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderImage();
}
