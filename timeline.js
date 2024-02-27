// Datos de la timeline
const timelineData = [
    {
        year: "First Year",
        experience: "Some work experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
    },
    {
        year: "Second Year",
        experience: "Some work experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
    },
    {
        year: "Third Year",
        experience: "Some work experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
    },
    {
        year: "Third Year",
        experience: "Some work experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
    },
    {
        year: "Third Year",
        experience: "Some work experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
    },

    // Agrega más datos de la timeline según sea necesario
];

// Función para crear y agregar bloques de timeline al contenedor
function renderTimeline() {
    const timelineContainer = document.getElementById("timeline-container");
    
    // Itera sobre los datos de la timeline
    timelineData.forEach((item, index) => {
        const timelineBlock = document.createElement("div");
        timelineBlock.classList.add("timeline-block");
        timelineBlock.classList.add(index % 2 === 0 ? "timeline-block-right" : "timeline-block-left");
        // Crea el marcador visual para cada bloque de la timeline
        const marker = document.createElement("div");
        marker.classList.add("marker");

        const timelineContent = document.createElement("div");
        timelineContent.classList.add("timeline-content");

        const heading = document.createElement("h3");
        heading.textContent = item.year;

        const experience = document.createElement("span");
        experience.textContent = item.experience;

        const description = document.createElement("p");
        description.textContent = item.description;
        // Agrega los elementos de encabezado, experiencia y descripción al contenido de la timeline
        timelineContent.appendChild(heading);
        timelineContent.appendChild(experience);
        timelineContent.appendChild(description);

        timelineBlock.appendChild(marker);
        timelineBlock.appendChild(timelineContent);
        // Agrega el bloque de la timeline al contenedor principal de la timeline en el HTML
        timelineContainer.appendChild(timelineBlock);
    });
}

// Llama a la función para renderizar la timeline cuando la página se carga completamente
document.addEventListener("DOMContentLoaded", function() {
    renderTimeline();
});
