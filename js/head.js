function agregarMetaTags() {
    var metaTags = [
        { name: 'viewport', value: 'width=device-width, initial-scale=1.0' },
        { name: 'icon', value: 'img/images.png', sizes: '32x32', type: './Images/Logo/logo_cuadrado_160.jpg' },
        { rel: 'stylesheet', href: './css/styles-footer.css' },
        { rel: 'stylesheet', href: './css/styles-navbar.css' },
        { rel: 'stylesheet', href: './css/styles-banner.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', integrity: 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
        { href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', rel: 'stylesheet', integrity: 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap', rel: 'stylesheet' },
    ];

    for (var i = 0; i < metaTags.length; i++) {
        var tag = document.createElement(metaTags[i].src ? 'script' : 'link');
        
        for (var prop in metaTags[i]) {
            tag.setAttribute(prop, metaTags[i][prop]);
        }

        document.head.appendChild(tag);
    }
}
document.addEventListener('DOMContentLoaded', agregarMetaTags);