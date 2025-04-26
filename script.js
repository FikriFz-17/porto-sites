// Navigation toggle for mobile
const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active")

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    })

    // Burger Animation
    burger.classList.toggle("toggle")
  })
}

// Smooth scrolling for navigation links
const smoothScroll = () => {
  const navLinks = document.querySelectorAll("header nav a")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Close mobile menu if open
      const nav = document.querySelector(".nav-links")
      const burger = document.querySelector(".burger")
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active")
        burger.classList.remove("toggle")
      }

      // Scroll to section
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      })
    })
  })
}


// Header scroll effect
const headerScroll = () => {
  const header = document.querySelector("header")
  const nav_link = document.querySelectorAll('.nav-link')

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.padding = "20px 0"
      header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = "20px 0"
      header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
    }
  })
}

// Active section highlight in navigation
const activeNavLink = () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("header nav a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })
}

// Initialize all functions
const app = () => {
  navSlide()
  smoothScroll()
  formValidation()
  headerScroll()
  activeNavLink()
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", app)
