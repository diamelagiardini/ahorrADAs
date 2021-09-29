// FUNCIONALIDAD DE BOTONES DEL NAV

// Cuando hago click en botonBalance, necesito que me muestre la seccionBalance y ocultar seccionCategorias y seccionReporte 

// Cuando hago click en botonCategorias, necesito que me muestre la seccionCategorias y ocultar seccionBalance y seccionReporte. 

//Cuando hago click en botonReporte, necesito que me muestre seccionReporte y ocultar seccionBalance y seccionCategorias 

const botonBalance = document.getElementById("boton-balance")
const botonCategorias = document.getElementById("boton-categorias")
const botonReporte = document.getElementById("boton-reporte")
const seccionBalance = document.getElementById("seccion-balance")
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionReporte = document.getElementById("seccion-reporte")

botonBalance.onclick = () => {
    seccionBalance.classList.remove("is-hidden")
    seccionCategorias.classList.add("is-hidden")
    seccionReporte.classList.add("is-hidden")
}

botonCategorias.onclick = () => {
    seccionCategorias.classList.remove("is-hidden")
    seccionBalance.classList.add("is-hidden")
    seccionReporte.classList.add("is-hidden")
}

botonReporte.onclick = () => {
    seccionReporte.classList.remove("is-hidden")
    seccionCategorias.classList.add("is-hidden")
    seccionBalance.classList.add("is-hidden")
}