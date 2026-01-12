fetch("content.json")
  .then(response => response.json())
  .then(data => {
    const main = document.getElementById("content");

    // Title
    const title = document.createElement("h1");
    title.textContent = data.title;

    // Description
    const desc = document.createElement("p");
    desc.textContent = data.description;

    main.appendChild(title);
    main.appendChild(desc);

    // Sections
    data.sections.forEach(section => {
      const sectionEl = document.createElement("section");

      const h2 = document.createElement("h2");
      h2.textContent = section.heading;

      const p = document.createElement("p");
      p.textContent = section.text;

      sectionEl.appendChild(h2);
      sectionEl.appendChild(p);
      main.appendChild(sectionEl);
    });
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });
