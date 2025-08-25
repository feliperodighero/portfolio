// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Download CV function
function downloadCV() {
  const link = document.createElement("a");
  link.href = "src/assets/CV.pdf";
  link.download = "CV-Felipe.pdf";
  link.click();
}

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("section > .container > *").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Project Links
const projectLinks = {
  "PAYFLOW": "https://github.com/feliperodighero/payflow",
  "HOTEL RESERVATIONS": "https://github.com/feliperodighero/hotel-reservations",
  "PIXEL LAB": "https://github.com/feliperodighero/pixel-lab",
  "GEOERECHIM": "https://github.com/feliperodighero/GeoErechim",
};

// Add click functionality to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function () {
    const projectName = this.querySelector("h3")
      .textContent.trim()
      .toUpperCase();

    const link = projectLinks[projectName];

    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Link do projeto não encontrado.");
    }
  });
});

// Add some parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function updateActiveNavigation() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let currentSection = "";
  const scrollPosition = window.scrollY + 100;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  if (currentSection) {
    const activeLink = document.querySelector(
      `nav a[href="#${currentSection}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);

updateActiveNavigation();

function calculateYearsSince(year, month = 0) {
  const now = new Date();
  const startDate = new Date(year, month);
  let years = now.getFullYear() - startDate.getFullYear();

  if (
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())
  ) {
    years--;
  }

  return years;
}

document.addEventListener("DOMContentLoaded", () => {

  const yearsProfession = calculateYearsSince(2023, 6);
  document.getElementById("experience-profession").innerText = `+${yearsProfession} ano${yearsProfession > 1 ? "s" : ""}`;

  const technologies = [
    { id: "experience-python", start: [2022, 6] },
    { id: "experience-pytorch", start: [2023, 6] },
    { id: "experience-tensorflow", start: [2023, 6] },
    { id: "experience-sklearn", start: [2023, 6] },
     { id: "experience-opencv", start: [2023, 6] },
    { id: "experience-fastapi", start: [2023, 6] },
    { id: "experience-pandas", start: [2023, 6] },
    { id: "experience-matplotlib", start: [2023, 6] },
    { id: "experience-sql", start: [2023, 6] },
    { id: "experience-docker", start: [2023, 6] },
    { id: "experience-postgresql", start: [2023, 6] },
    { id: "experience-restful", start: [2023, 6] },

    { id: "experience-mysql", start: [2024, 6] },
    { id: "experience-redis", start: [2024, 6] },
    { id: "experience-javascript", start: [2024, 6] },
    { id: "experience-typescript", start: [2024, 6] },
    { id: "experience-nodejs", start: [2024, 6] },
    { id: "experience-nestjs", start: [2024, 6] },
    { id: "experience-laravel", start: [2024, 6] },
    { id: "experience-graphql", start: [2024, 6] },
    { id: "experience-jenkins", start: [2024, 6] },
  ];

  technologies.forEach(({ id, start }) => {
    const el = document.getElementById(id);
    if (el) {
      const years = calculateYearsSince(...start);
      el.innerText = `+${years} ano${years > 1 ? "s" : ""}`;
    }
  });
});
