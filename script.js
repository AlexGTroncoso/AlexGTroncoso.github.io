document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    let selectEstrellas = document.getElementById("estrellas");
    let titulo = document.getElementById("estrella-nombre");
    let descripcion = document.getElementById("estrella-info");
    let imagen = document.querySelector(".image"); // Seleccionar la imagen del diagrama

    // Definir información de las estrellas
    let datosEstrellas = {
        "K-rich 1": {
            titulo: "K-rich 1",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Krich_1.png"
        },
        "K-rich 2": {
            titulo: "K-rich 2",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Krich_2.png"
        },
        "Na-rich": {
            titulo: "Na-rich",
            descripcion: "Datos e información sobre N-rich 2. Características principales y análisis.",
            imagen: "img/Diagrama_HR_Na_rich.png"
        },
        "N-rich 1": {
            titulo: "N-rich 1",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_1.png"
        },
        "N-rich 2": {
            titulo: "N-rich 2",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_2.png"
        },
        "N-rich 2": {
            titulo: "N-rich 2",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_2.png"
        },
        "N-rich 3": {
            titulo: "N-rich 3",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_3.png"
        },
        "N-rich 4": {
            titulo: "N-rich 4",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_4.png"
        },
        "N-rich 5": {
            titulo: "N-rich 5",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_5.png"
        },
        "N-rich 6": {
            titulo: "N-rich 6",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_6.png"
        },
        "N-rich 7": {
            titulo: "N-rich 7",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_7.png"
        },
        "N-rich 8": {
            titulo: "N-rich 8",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Nrich_8.png"
        },
        "Si-rich": {
            titulo: "Si-rich",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_Si_rich.png"
        },
        "s-rich": {
            titulo: "s-rich",
            descripcion: "Descripción sobre la estrella N-rich 1. Información relevante sobre esta categoría.",
            imagen: "img/Diagrama_HR_s-rich.png"
        },
    };

    // Escuchar cambios en el select
    selectEstrellas.addEventListener("change", function() {
        let estrellaSeleccionada = this.value;
        
        if (datosEstrellas.hasOwnProperty(estrellaSeleccionada)) {
            titulo.textContent = datosEstrellas[estrellaSeleccionada].titulo;
            descripcion.textContent = datosEstrellas[estrellaSeleccionada].descripcion;
            imagen.src = datosEstrellas[estrellaSeleccionada].imagen; // Cambiar la imagen
        } else {
            titulo.textContent = "Estrella no encontrada";
            descripcion.textContent = "No hay información disponible para esta selección.";
            imagen.src = "img/Diagrama_HR.png"; // Imagen por defecto si no se encuentra la estrella
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let botones = document.querySelectorAll(".boton");
    let currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual

    botones.forEach(boton => {
        if (boton.getAttribute("href") === currentPage) {
            boton.classList.add("activo");
        }
    });
});
