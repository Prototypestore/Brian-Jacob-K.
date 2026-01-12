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

