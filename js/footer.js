// footer.js

class CustomFooter {
    constructor() {
      this.footerElement = document.createElement('footer');
      this.footerElement.innerHTML = `
        <div class="FooterContainer">
            <div class="SocialIcons">
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div class="footernav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="QuienesSomos.html">Quienes Somos</a></li>
                    <li><a href="Servicios.html">Servicios</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
            <div class="Ft">
                <p>Copyright is &copy;2024 NuntiusIt Designed by <span class="designer">NuntiusIt</span></p>
            </div>
        </div>
      `;
    }
  
    render(targetElementId) {
      const targetElement = document.getElementById(targetElementId);
      targetElement.appendChild(this.footerElement);
    }
  }
  
  // Crear una instancia de la CustomFooter
  const customFooter = new CustomFooter();
  