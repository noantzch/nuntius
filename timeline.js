// Datos de la timeline
const timelineData = [
    {
        year: "Timeline: pasos a seguir",
        description: "Estos pasos son más que un proceso; son una asociación colaborativa que garantiza que tu visión se materialice de manera efectiva. Desde la idea inicial hasta el lanzamiento, estamos comprometidos a hacer posible cada paso del camino."
    },
    {
        year: "Exploración de Ideas - Escuchamos tu Visión",
        description: "En esta fase inicial, nos sumergimos en tus ideas y necesidades. Nos reunimos contigo para comprender a fondo tu visión, identificar desafíos y establecer los objetivos de desarrollo. Tu perspectiva es fundamental, y esta etapa sienta las bases para el éxito de tu proyecto."
    },
    {
        year: "Análisis y Soluciones - Reuniones Estratégicas para Definir Problemas y Soluciones",
        description: "Aquí nos sumergimos en el análisis detallado. Identificamos los desafíos específicos que enfrentas y colaboramos en la búsqueda de las soluciones más efectivas. A través de reuniones estratégicas, definimos el camino a seguir y diseñamos un plan de acción claro."
    },
    {
        year: "Desarrollo en Acción - Coordinación y Desarrollo Activo",
        description: "En esta fase, coordinamos estrechamente contigo para asegurarnos de que estemos en línea con tus expectativas. Realizamos reuniones periódicas para mostrarte avances tangibles, recopilamos tus comentarios y ajustamos el curso según sea necesario. Este paso es crucial para garantizar que el desarrollo refleje con precisión tus necesidades."
    },
    {
        year: "Lanzamiento Exitoso - De Desarrollo a Producción",
        description: "Una vez completado el desarrollo y coordinado con tu aprobación, llevamos la solución a producción. Este es el emocionante paso hacia el lanzamiento exitoso. Desde aquí, comienzas a experimentar los beneficios de la solución en acción, marcando el inicio de un nuevo capítulo de éxito digital."
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
