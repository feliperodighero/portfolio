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
  link.href = "./src/assets/CV.pdf";
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
  PAYFLOW: "https://github.com/seu-usuario/payflow",
  "HOTEL RESERVATIONS": "https://github.com/feliperodighero/hotel-reservations",
  "PIXEL LAB": "https://github.com/feliperodighero/pixel-lab",
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
