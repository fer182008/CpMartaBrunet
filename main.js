/*Menú teléfonos*/ 
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav-menu");

    if (btn && nav) {
        btn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

});

/* ============================================
   FORMULARIO: ENVIAR CORREO
============================================ */
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        let destinatario = "escuelamartabrunet@epmartabrunet.cl";
        let asunto = encodeURIComponent("Mensaje Sitio Web");
        let cuerpo = encodeURIComponent(
            "Nombre: " + nombre + "\n" +
            "Email: " + email + "\n\n" +
            "Mensaje:\n" + mensaje
        );

        let url =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;

        window.open(url, "_blank");
    });

});


/* ============================================
   CARRUSELES INDEPENDIENTES (Noticias, Deportes, etc.)
============================================ */
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.carousel-container').forEach(container => {

        const carousel = container.querySelector('.carousel');
        const slides = container.querySelectorAll('.slide');
        const prev = container.querySelector('.prev');
        const next = container.querySelector('.next');
        const dots = container.querySelector('.carousel-dots');

        let index = 0;

        // Si solo hay 1 imagen → ocultar controles
        if (slides.length <= 1) {
            if (prev) prev.style.display = "none";
            if (next) next.style.display = "none";
            if (dots) dots.style.display = "none";
            return;
        }

        // Funciones
        function updateCarousel() {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function showNext() {
            index = (index + 1) % slides.length;
            updateCarousel();
        }

        function showPrev() {
            index = (index - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        // Botones
        if (next) next.addEventListener("click", showNext);
        if (prev) prev.addEventListener("click", showPrev);

        // Auto-slide
        setInterval(showNext, 6000);

    });

});


document.addEventListener("DOMContentLoaded", () => {

    // Botón: Ver en Pantalla Completa
    document.querySelectorAll(".btn-view").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const url = btn.getAttribute("href");

            // Abre el PDF en pestaña nueva sin barras
            window.open(url + "#toolbar=0&navpanes=0&scrollbar=0", "_blank");
        });
    });

    // Botón: Descargar Archivo
    document.querySelectorAll(".btn-download").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const url = btn.getAttribute("href");

            // Fuerza la descarga
            const a = document.createElement("a");
            a.href = url;
            a.download = url.split("/").pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

});
