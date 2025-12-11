// --- Året i footer ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Enkel mobilmeny ---
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
if (navToggle && siteNav) {
  navToggle.onclick = () => {
    siteNav.classList.toggle("open");
  };
}

// --- Slider styrer scrollet ---
const slider = document.getElementById("carouselSlider");
const carousel = document.getElementById("carousel");
if (slider && carousel) {
  slider.addEventListener("input", () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = (slider.value / 100) * maxScroll;
  });

  // --- Klikk på bilde for pop-up ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (lightbox && lightboxImg) {
    carousel.querySelectorAll("img").forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
      });
    });

    // ESC lukker popup
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") lightbox.classList.remove("show");
    });

    // Klikk utenfor bilde lukker popup
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.classList.remove("show");
    });
  }
}

// Oversettelse
const btn = document.getElementById("translateBtn");
if (btn) {
  let currentLang = localStorage.getItem("siteLang") || "no";

function updateLanguage(lang) {
 
  document.querySelectorAll(".lang-no").forEach(el => {
    el.style.display = lang === "no" ? "" : "none";
  });
  document.querySelectorAll(".lang-en").forEach(el => {
    el.style.display = lang === "en" ? "" : "none";
  });

  document.querySelectorAll("input[data-placeholder-no], textarea[data-placeholder-no]")
    .forEach(el => {
      el.placeholder = lang === "no"
        ? el.dataset.placeholderNo
        : el.dataset.placeholderEn;
    });

  // Bytter mellom norsk/engelsk på knappen
  btn.textContent = lang === "no" ? "English" : "Norwegian";
  localStorage.setItem("siteLang", lang);
}

  updateLanguage(currentLang);

  // Bytter mellom norsk/engelsk
  btn.addEventListener("click", () => {
    currentLang = currentLang === "no" ? "en" : "no";
    updateLanguage(currentLang);
  });
} else {
  console.warn("Translate button not found");
}
