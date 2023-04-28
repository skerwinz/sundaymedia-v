// Obtener referencia a los elementos del DOM
const switcher = document.getElementById('dark-mode-switch');
const body = document.body;
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

// Verificar el estado inicial del switcher al cargar la página
if (localStorage.getItem('dark-mode') === 'true') {
  enableDarkMode();
}

// Función para habilitar el modo oscuro
function enableDarkMode() {
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
  navLinks.forEach(link => link.classList.add('dark-mode'));
  localStorage.setItem('dark-mode', 'true');
}

// Función para deshabilitar el modo oscuro
function disableDarkMode() {
  body.classList.remove('dark-mode');
  header.classList.remove('dark-mode');
  navLinks.forEach(link => link.classList.remove('dark-mode'));
  localStorage.setItem('dark-mode', 'false');
}

// Evento para cambiar el modo cuando se interactúa con el switcher
switcher.addEventListener('change', () => {
  if (switcher.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Selecciona todos los enlaces del menú del encabezado
const headerLinks = document.querySelectorAll('header nav ul li a');

// Agrega un controlador de eventos a cada enlace
headerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Previene el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtiene el destino del enlace utilizando el atributo href
    const targetId = link.getAttribute('href');

    // Obtiene la posición de destino restando la altura del encabezado
    const targetPosition = document.querySelector(targetId).offsetTop - document.querySelector('header').offsetHeight;

    // Realiza el desplazamiento suave utilizando el método scrollTo
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});