document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".sidebar-link");

  function activateSection() {
    let currentSection = "";
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight / 2) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const indicator = link.querySelector(".indicator");
      link.classList.remove("active");
      indicator.classList.add("opacity-0");

      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
        indicator.classList.remove("opacity-0");
      }
    });
  }

  window.addEventListener("scroll", activateSection);
  activateSection();
});
