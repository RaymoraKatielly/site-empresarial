// =========================
// Galeria Vanelle - Script
// =========================

// 1) Ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// 2) Menu mobile (abre/fecha)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!btn || !mobileNav) return;

  const closeMenu = () => {
    mobileNav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  };

  btn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  });

  // Fecha ao clicar em qualquer link
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});

// 3) Filtro de "Profissionais & Negócios"
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".biz-card");

  if (!filters.length || !cards.length) return;

  const setActive = (btn) => {
    filters.forEach((f) => f.classList.remove("is-active"));
    btn.classList.add("is-active");
  };

  const applyFilter = (category) => {
    cards.forEach((card) => {
      const cardCat = card.getAttribute("data-category");
      const show = category === "todos" || category === cardCat;
      card.style.display = show ? "" : "none";
    });
  };

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-filter");
      setActive(btn);
      applyFilter(category);
    });
  });
});

// 4) Links do WhatsApp / Instagram (placeholders centralizados)
// Troque APENAS aqui depois, para atualizar o site todo.
document.addEventListener("DOMContentLoaded", () => {
  // Substitua pelo número real no formato internacional: 55DDDNÚMERO
  const WHATS_NUMBER = "5599999999999"; // <-- TROCAR
  const INSTAGRAM_URL = "https://instagram.com/seuinstagram"; // <-- TROCAR

  const msgDefault = "Olá! Vim pelo site da Galeria Vanelle e gostaria de informações.";
  const msgLocacao = "Olá! Vim pelo site da Galeria Vanelle e gostaria de informações sobre locação de sala.";

  // Botão principal de WhatsApp (Contato)
  const whatsBtn = document.getElementById("whatsBtn");
  // Botão flutuante
  const floatWhats = document.getElementById("floatWhats");
  // Instagram
  const instaLink = document.getElementById("instaLink");

  const buildWhatsLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATS_NUMBER}?text=${encoded}`;
  };

  if (whatsBtn) whatsBtn.href = buildWhatsLink(msgDefault);
  if (floatWhats) floatWhats.href = buildWhatsLink(msgDefault);
  if (instaLink) instaLink.href = INSTAGRAM_URL;

  // Exemplo: se você quiser um link específico de locação no futuro,
  // crie um botão com id="rentBtn" e use:
  const rentBtn = document.getElementById("rentBtn");
  if (rentBtn) rentBtn.href = buildWhatsLink(msgLocacao);
});
