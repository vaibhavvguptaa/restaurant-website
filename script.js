document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
  
    if (menuBtn && navLinks) {
      const menuBtnIcon = menuBtn.querySelector("i");
  
      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuBtnIcon.className = navLinks.classList.contains("open") 
          ? "ri-close-line" 
          : "ri-menu-line";
      });
  
      navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.className = "ri-menu-line";
      });
    }
  
    // ScrollReveal Configuration
    if (typeof ScrollReveal !== "undefined") {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };
  
      const scrollItems = [
        [".header-image .image img", {}],
        [".header-top", { delay: 500 }],
        [".header-content h1", { delay: 1000 }],
        [".header-content p", { delay: 1500 }],
        [".header-btns", { delay: 2000 }],
        [".header-card", { delay: 500, interval: 500 }],
        [".header-image-footer", { delay: 2000 }],
        [".menu-card", { interval: 500 }],
        [".menu-btn", { delay: 1500 }],
        [".service-card", { interval: 500 }],
        [".banner-image img", { origin: "right" }],
        [".banner-content .section-header", { delay: 500 }],
        [".banner-content p", { delay: 1000 }],
        [".banner-btn", { delay: 1500 }],
        [".customer-image img", { origin: "left" }],
      ];
  
      scrollItems.forEach(([selector, options]) => {
        ScrollReveal().reveal(selector, { ...scrollRevealOption, ...options });
      });
    }
  
    // Swiper Initialization (if the Swiper element exists)
    if (document.querySelector(".swiper")) {
      new Swiper(".swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
      });
    }
  });
  