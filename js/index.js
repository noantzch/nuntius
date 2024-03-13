//Script para navbar

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('white');
        $('.navbar').removeClass('transparent');
      } else {
        $('.navbar').addClass('transparent');
        $('.navbar').removeClass('white');
      }
    });
  });
  
  //Dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }


  //Script para las cards
  const jsonFilePath = './JSON/cardsClientes.json';
  
  function generateCard(data, container) {
    $.each(data, function(index, item) {
      const card = $('<div>').addClass('card mb-3 m-3 card-comentario').css('width', '15rem');
      const cardBody = $('<div>').addClass('card-body clientes');
      $('<img>').addClass('img-comentario').attr('src', item.imgUrl).appendTo(cardBody);
      $('<p>').addClass('card-text text-center font-italic').text(item.comentario).appendTo(cardBody);
      $('<h5>').addClass('card-title text-center').text(item.nombre).appendTo(cardBody);
      $('<h6>').addClass('card-subtitle mb-2 text-center').text(item.rol).appendTo(cardBody);
      $('<p>').addClass('card-text text-center').text("⭐⭐⭐⭐⭐").appendTo(cardBody);
      cardBody.appendTo(card);
      card.appendTo(container);
    });
  }
  // Función para cargar el JSON y generar las tarjetas
  function loadAndGenerateCards() {
    const cardContainer = $('#cardContainer');

    // Realiza una solicitud para cargar el archivo JSON 
    $.getJSON(jsonFilePath, function(jsonData) {
      console.log('JSON cargado exitosamente:', jsonData);
      generateCard(jsonData, cardContainer);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.error('Error al cargar el JSON:', textStatus, errorThrown);
    });
  }

  // Llama a la función para cargar y generar las tarjetas
  $(document).ready(function() {
    loadAndGenerateCards();
  });

  //Script timeline 


 // Función para crear y agregar bloques al contenedor
function renderTimeline(data) {
    const timelineContainer = document.getElementById("timeline-container");
    
    // Itera sobre los datos de la timeline
    data.forEach((item, index) => {
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

        const description = document.createElement("p");
        description.textContent = item.description;
        // Agrega los elementos de encabezado y descripción al contenido
        timelineContent.appendChild(heading);
        timelineContent.appendChild(description);

        timelineBlock.appendChild(marker);
        timelineBlock.appendChild(timelineContent);
        // Agrega el bloque de la timeline al contenedor principal 
        timelineContainer.appendChild(timelineBlock);
    });
}

// Llama a la función para renderizar la timeline cuando la página se carga completamente
document.addEventListener("DOMContentLoaded", function() {
    // Realiza una solicitud para cargar el archivo JSON de la timeline
    fetch('./JSON/timelineData.json')
    .then(response => response.json())
    .then(data => {
        renderTimeline(data);
    })
});