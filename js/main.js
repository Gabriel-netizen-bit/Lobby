
/* Modo claro y oscuro del Lobby */

const botonTema = document.getElementById("theme-toggle");

const temaGuardado = localStorage.getItem("lobby-theme");

if (temaGuardado === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

function actualizarBoton() {
    const oscuro =
        document.documentElement.getAttribute("data-theme") === "dark";

    botonTema.textContent = oscuro ? "☀" : "☾";
    botonTema.setAttribute(
        "aria-label",
        oscuro ? "Activar modo claro" : "Activar modo oscuro"
    );
}

actualizarBoton();

botonTema.addEventListener("click", () => {
    const oscuro =
        document.documentElement.getAttribute("data-theme") === "dark";

    if (oscuro) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("lobby-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("lobby-theme", "dark");
    }

    actualizarBoton();
});
/* Selector de idioma ES / EN */

const languageToggle = document.getElementById("language-toggle");

let idioma = localStorage.getItem("lobby-language") || "es";

function actualizarIdioma() {
    document.documentElement.lang = idioma;
    // Mantener el idioma al entrar a Cines
const enlaceCines = document.querySelector("#banner-b a.banner-boton");

if (enlaceCines) {
    enlaceCines.href =
        "https://gabriel-netizen-bit.github.io/Cines-Lobby/?lang=" + idioma;
}
    /* Seleccionar el currículum según el idioma */
const descargarCV = document.getElementById("descargar-cv");

if (descargarCV) {
    const archivo = idioma === "en"
        ? "CV_Percy_Jimenez_EN.pdf"
        : "CV_Percy_Jimenez.pdf";

    descargarCV.href = `./${archivo}`;
    descargarCV.download = archivo;
}
    if (typeof traducciones !== "undefined") {
    document.querySelectorAll("[data-i18n]").forEach((elemento) => {
        const clave = elemento.dataset.i18n;
        const texto = traducciones[idioma]?.[clave];

        if (texto !== undefined) {
            elemento.innerHTML = texto;
        }
    });
}

    if (languageToggle) {
        languageToggle.textContent = idioma === "es" ? "ES / EN" : "EN / ES";
        languageToggle.setAttribute(
            "aria-label",
            idioma === "es" ? "Cambiar a inglés" : "Switch to Spanish"
        );
    }
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        idioma = idioma === "es" ? "en" : "es";
        localStorage.setItem("lobby-language", idioma);
        actualizarIdioma();
    });
}

actualizarIdioma();

/* Navegación lateral: sección activa */

const enlacesLaterales = document.querySelectorAll(".navegacion-lateral a");

if (enlacesLaterales.length) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                enlacesLaterales.forEach((enlace) => {
                    enlace.classList.toggle(
                        "activo",
                        enlace.getAttribute("href") === `#${entrada.target.id}`
                    );
                });
            }
        });
    }, {
        rootMargin: "-35% 0px -35% 0px"
    });

    enlacesLaterales.forEach((enlace) => {
        const seccion = document.querySelector(enlace.getAttribute("href"));
        if (seccion) observador.observe(seccion);
    });
}

