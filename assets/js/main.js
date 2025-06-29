// Main JavaScript for Tachiyomi Website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize animations
  initAnimations();

  // Initialize navbar scroll effect
  initNavbarScroll();

  // Initialize smooth scrolling
  initSmoothScrolling();

  // Initialize counter animations
  initCounterAnimations();
});

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector(".custom-navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(2, 8, 23, 0.98)";
    } else {
      navbar.style.background = "rgba(2, 8, 23, 0.95)";
    }
  });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialize animations on scroll
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    observer.observe(card);
  });

  // Observe stat cards
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card) => {
    observer.observe(card);
  });
}

// Counter animations for statistics
function initCounterAnimations() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = counter.innerText;

        // Extract number from text (e.g., "5M+" -> 5)
        const numberMatch = target.match(/[\d.]+/);
        if (numberMatch) {
          const targetNumber = parseFloat(numberMatch[0]);
          const suffix = target.replace(numberMatch[0], "");

          animateCounter(counter, targetNumber, suffix, speed);
        }

        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

function animateCounter(element, target, suffix, speed) {
  const increment = target / speed;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      element.innerText = target + suffix;
      clearInterval(timer);
    } else {
      element.innerText = Math.floor(current) + suffix;
    }
  }, 1);
}

// Form validation (for contact forms)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }

    // Email validation
    if (input.type === "email" && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        input.classList.add("is-invalid");
      }
    }
  });

  return isValid;
}

// Mobile menu close on link click
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  }
});

// Button hover effects
document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("btn-gradient")) {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 10px 25px rgba(139, 92, 246, 0.3)";
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("btn-gradient")) {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "none";
  }
});

// Preloader (optional)
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 300);
  }
});

// Error handling for images
document.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IMG") {
      e.target.style.display = "none";
      console.log("Image failed to load:", e.target.src);
    }
  },
  true,
);

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Performance optimization
const debouncedResize = debounce(function () {
  // Handle resize events
  console.log("Window resized");
}, 250);

window.addEventListener("resize", debouncedResize);
