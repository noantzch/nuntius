
class CustomNavbar {
    constructor() {
    this.navbarElement = document.createElement('nav');
    this.navbarElement.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'fixed-top');
    this.navbarElement.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img id="logo" src="./Images/Logo/logo_normal_corto.png" alt="logo"></a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="navbar-collapse collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./QuienesSomos.html">Quienes Somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Servicios.html">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contacto.html">Contacto</a>
                    </li>
                    <li class="nav-item darkmode-btn btn-d" onclick="toggleDarkMode()">
                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2vw" width="2vw" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"></path></svg>
                    </li> 
                </ul>
            </div>
        </div>
    `;
    }

    render(targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    targetElement.appendChild(this.navbarElement);
    }
    
}

  // instancia de la CustomNavbar
const customNavbar = new CustomNavbar();

// Función para cambiar el modo oscuro
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    // Almacenar el estado del modo oscuro en el almacenamiento local
    localStorage.setItem('darkMode', isDarkMode);
    // Cambiar el tema de acuerdo al estado del modo oscuro
    applyDarkMode(isDarkMode);
}

// Función para aplicar el modo oscuro según el estado proporcionado
function applyDarkMode(isDarkMode) {
    const logoElement = document.getElementById('logo');
    const currentSrc = logoElement.getAttribute('src');
    // Reemplazar con las rutas de las imágenes para modo oscuro y claro
    const darkModeSrc = './Images/Logo/logo_dark_corto.png';
    const lightModeSrc = './Images/Logo/logo_normal_corto.png';

    // Cambiar el src de la imagen del logo según el modo actual
    const newSrc = isDarkMode ? darkModeSrc : lightModeSrc;
    logoElement.setAttribute('src', newSrc);
}

// Aplicar el modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el estado del modo oscuro del almacenamiento local
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    // Aplicar el modo oscuro
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    applyDarkMode(isDarkMode);
});

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('white');
        $('.navbar').removeClass('transparent');
      } else {
        $('.navbar').addClass('transparent');
        $('.navbar').removeClass('white');
      }
    });
  });