// =========================
// Galeria Vanelle - Script (Final)
// =========================

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1) Ano no rodapé
  ========================= */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* =========================
     2) Menu mobile (abre/fecha)
  ========================= */
  const btn = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  const closeMenu = () => {
    if (!btn || !mobileNav) return;
    mobileNav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  };

  const openMenu = () => {
    if (!btn || !mobileNav) return;
    mobileNav.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
  };

  const toggleMenu = () => {
    if (!btn || !mobileNav) return;
    const isOpen = mobileNav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  };

  if (btn && mobileNav) {
    // estado inicial acessível
    btn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Fecha ao clicar em qualquer link do menu
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // Fecha ao clicar fora (boa UX)
    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedInsideNav = mobileNav.contains(target);
      const clickedButton = btn.contains(target);
      const isOpen = mobileNav.classList.contains("is-open");

      if (isOpen && !clickedInsideNav && !clickedButton) closeMenu();
    });

    // Fecha com ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* =========================
     3) Filtro "Profissionais & Negócios"
  ========================= */
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".biz-card");

  const setActive = (activeBtn) => {
    filters.forEach((f) => f.classList.remove("is-active"));
    activeBtn.classList.add("is-active");
  };

  const applyFilter = (category) => {
    cards.forEach((card) => {
      const cardCat = card.getAttribute("data-category");
      const show = category === "todos" || category === cardCat;
      card.style.display = show ? "" : "none";
    });
  };

  if (filters.length && cards.length) {
    filters.forEach((fbtn) => {
      fbtn.addEventListener("click", () => {
        const category = fbtn.getAttribute("data-filter") || "todos";
        setActive(fbtn);
        applyFilter(category);
      });
    });
  }

  /* =========================
     4) Links WhatsApp / Instagram (centralizado)
     Troque APENAS aqui depois para atualizar tudo.
  ========================= */
 document.addEventListener("DOMContentLoaded", () => {
  const WHATS_NUMBER = "5566999143397"; // 55 + DDD + número
  const INSTAGRAM_URL = "https://instagram.com/morenarosaartebeleza";

  const message =
    "Olá! Vim pelo site da Galeria Vanelle e gostaria de informações.";

  const whatsLink =
    "https://wa.me/" + WHATS_NUMBER + "?text=" + encodeURIComponent(message);

  const whatsBtn = document.getElementById("whatsBtn");
  const instaLink = document.getElementById("instaLink");

  if (whatsBtn) whatsBtn.href = whatsLink;
  if (instaLink) instaLink.href = INSTAGRAM_URL;
});

  const whatsBtn = document.getElementById("whatsBtn");
  const floatWhats = document.getElementById("floatWhats");
  const instaLink = document.getElementById("instaLink");

  if (whatsBtn) whatsBtn.href = buildWhatsLink(msgDefault);
  if (floatWhats) floatWhats.href = buildWhatsLink(msgDefault);
  if (instaLink) instaLink.href = INSTAGRAM_URL;

  // Se você criar botões/links específicos no HTML, basta usar estes ids:
  // - id="rentBtn" para locação
  // - id="rentBtn2" (ou outros) se quiser mais de um
  const rentBtn = document.getElementById("rentBtn");
  const rentBtn2 = document.getElementById("rentBtn2");

  if (rentBtn) rentBtn.href = buildWhatsLink(msgLocacao);
  if (rentBtn2) rentBtn2.href = buildWhatsLink(msgLocacao);

  // Acessibilidade/UX: se o botão de WhatsApp estiver dentro do menu mobile,
  // ao clicar ele fecha o menu antes de navegar.
  if (mobileNav) {
    mobileNav.querySelectorAll("a.btn").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });
  }
});
