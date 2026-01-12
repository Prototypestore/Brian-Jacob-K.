let images = [];
let currentIndex = 0;

fetch("carousel.json")
  .then(res => res.json())
  .then(data => {
    images = data.carousel;
    createCarousel();
    renderImage();
  });

function createCarousel() {
  const main = document.getElementById("content");

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

function renderImage() {
  const img = document.getElementById("carousel-image");
  img.src = images[currentIndex].image;
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  renderImage();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderImage();
}
