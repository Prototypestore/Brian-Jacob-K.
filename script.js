fetch("content.json")
  .then(res => res.json())
  .then(data => {
    const main = document.getElementById("content");

    const section = document.createElement("section");
    section.className = "services-section";

    const header = document.createElement("div");
    header.className = "services-header";

    const h1 = document.createElement("h1");
    h1.textContent = "Services";

    const intro = document.createElement("p");
    intro.textContent =
      "Built for cold climates, rugged terrain, and modern digital explorers.";

    header.appendChild(h1);
    header.appendChild(intro);

    const grid = document.createElement("div");
    grid.className = "services-grid";

    data.services.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";

      const h3 = document.createElement("h3");
      h3.textContent = service.title;

      const p = document.createElement("p");
      p.textContent = service.description;

      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);
    main.appendChild(section);
  })
  .catch(err => console.error("JSON load error:", err));

document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.querySelector("#contact a");

  if (!contactLink) return;

  const SHINE_INTERVAL = 5000; // ms (5 seconds per loop)

  function runGoldShine() {
    contactLink.classList.remove("gold-shine");
    // force reflow so animation restarts cleanly
    void contactLink.offsetWidth;
    contactLink.classList.add("gold-shine");
  }

  // initial delay so page feels calm
  setTimeout(runGoldShine, 2000);

  // loop forever
  setInterval(runGoldShine, SHINE_INTERVAL);
});
