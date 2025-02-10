document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Función para establecer el ícono según el tema
  function setIcon(theme) {
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  // Comprobar el tema actual al cargar la página
  const currentTheme = localStorage.getItem('theme') || 'dark';
  setIcon(currentTheme);

  // Evento para cambiar el tema
  themeToggle.addEventListener('click', function () {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIcon(newTheme);
  });
});
