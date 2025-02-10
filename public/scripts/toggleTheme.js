document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Verificar la preferencia de tema almacenada en localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
  }

  // Alternar el tema al hacer clic en el botón
  themeToggleBtn.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
