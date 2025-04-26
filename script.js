document.addEventListener("DOMContentLoaded", () => {
  // Restore scroll position if available
  const savedScrollPosition = localStorage.getItem("scrollPosition");
  if (savedScrollPosition !== null) {
    window.scrollTo(0, parseInt(savedScrollPosition));
  }

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 350,
    easing: "ease",
    once: false,
    mirror: false,
  });

  // Mobile Navigation
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
    });
  });

  const themeToggle = document.querySelector("#theme-toggle");
  const htmlElement = document.documentElement;
  const icon = themeToggle; // langsung!

  // Cek saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.classList.add(savedTheme);
    updateIcon(savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateIcon("dark");
  }

  // Event klik untuk toggle tema
  themeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      updateIcon("light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      updateIcon("dark");
    }

    // Refresh AOS after theme change
    setTimeout(() => {
      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }
    }, 300);
  });

  // Update icon Sun ↔ Moon
  function updateIcon(theme) {
    if (theme === "dark") {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }

  // Refresh AOS on window resize
  window.addEventListener("resize", () => {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Save scroll position before page unload
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});
