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
  
  // Form validation
  const formValidation = () => {
    const form = document.getElementById("contactForm")
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const subject = document.getElementById("subject").value.trim()
        const message = document.getElementById("message").value.trim()
  
        // Simple validation
        if (name === "" || email === "" || subject === "" || message === "") {
          alert("Please fill in all fields")
          return
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address")
          return
        }
  
        // If validation passes, you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert("Message sent successfully!")
        form.reset()
      })
    }
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
  