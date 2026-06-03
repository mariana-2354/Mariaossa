
// ==================== INICIO HEADER HAMBURGUESA ====================
const hamburguesa = document.querySelector('.menu-hamburguesa');
const menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// ==================== FIN HEADER HAMBURGUESA ====================//



// ==================== INICIO BANNER CARRUSEL ====================
const slides = document.querySelectorAll('.slide');
let indexActual = 0;
const totalSlides = slides.length;

function cambiarSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    indexActual = (indexActual + 1) % totalSlides;
    
    slides[indexActual].classList.add('active');
}

// Cambia cada 1 segundo (5000 milisegundos)
setInterval(cambiarSlide, 3000);
// ==================== FIN BANNER CARRUSEL ====================




// ==================== INICIO HEADER TRANSPARENTE AL SCROLL ====================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('transparente');
    } else {
        header.classList.remove('transparente');
    }
});
// ==================== FIN HEADER TRANSPARENTE AL SCROLL ====================





// ==================== INICIO ANIMACIÓN AL HACER SCROLL ====================
const elementosAnimados = document.querySelectorAll('.sobre-mi, .mision-vision, .servicios, .tarjeta');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

elementosAnimados.forEach(elemento => {
    observer.observe(elemento);
});
// ==================== FIN ANIMACIÓN AL HACER SCROLL ====================



// ==================== INICIO MENÚ LATERAL ====================
const abrirMenu = document.getElementById('abrir-menu');
const cerrarMenu = document.getElementById('cerrar-menu');
const menuLateral = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay-menu');

function abrirMenuLateral() {
    menuLateral.classList.add('abierto');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function cerrarMenuLateral() {
    menuLateral.classList.remove('abierto');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
}

abrirMenu.addEventListener('click', abrirMenuLateral);
cerrarMenu.addEventListener('click', cerrarMenuLateral);
overlay.addEventListener('click', cerrarMenuLateral);

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.menu-lateral-nav a').forEach(enlace => {
    enlace.addEventListener('click', cerrarMenuLateral);
});
// ==================== FIN MENÚ LATERAL ====================