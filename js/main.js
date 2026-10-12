
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
