// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Accordion
document.querySelectorAll("[data-accordion]").forEach(acc => {
  const buttons = acc.querySelectorAll(".acc__btn");
  const panels = acc.querySelectorAll(".acc__panel");

  // garante o primeiro aberto
  panels.forEach((p, i) => { if (i !== 0) p.hidden = true; });

  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // fecha todos
      buttons.forEach(b => b.setAttribute("aria-expanded", "false"));
      panels.forEach(p => (p.hidden = true));

      // abre o clicado (se estava fechado)
      if (!isExpanded) {
        btn.setAttribute("aria-expanded", "true");
        panels[idx].hidden = false;
      }
    });
  });
});
