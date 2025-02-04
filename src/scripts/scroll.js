document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sidebarLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`[data-section="${entry.target.id}"]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    
    sections.forEach(section => observer.observe(section));
  });