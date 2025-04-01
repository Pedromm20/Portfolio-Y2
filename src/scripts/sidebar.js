console.log("El script se está ejecutando");

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll(".sidebar-link");

  console.log("Secciones a observar:", sections);  // Añadido para verificar las secciones

  const observer = new IntersectionObserver(
    (entries) => {
      let activeSection = null;

      entries.forEach((entry) => {
        console.log("Entrada observada:", entry.target.id); // Verifica qué sección se está observando
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });

      if (activeSection) {
        console.log("Sección activa:", activeSection); // Muestra cuál es la sección activa
        links.forEach((link) => {
          const isActive = link.getAttribute("data-section") === activeSection;
          console.log(`¿Es activo el enlace ${link}?`, isActive);  // Verifica si el enlace es activo
          link.classList.toggle("active", isActive);
          link.classList.toggle("scale-110", isActive);
        });
      }
    },
    { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
});
