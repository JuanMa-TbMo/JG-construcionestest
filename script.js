function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.getElementById('btn-cita').addEventListener('click', function() {
    window.open('https://web.whatsapp.com/send?phone=59899616991', '_blank');
});
 document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=59899616991', '_blank');
});

// Array de proyectos
const proyectos = [
    {
        imagen: "assets/terminadas.jpg",
        titulo: "Obras Terminadas",
        descripcion: "Obras en casas, edificios, camaras. Construcción en general",
        carpeta: "obras-terminadas"
    },
    {
        imagen: "assets/proceso.jpg",
        titulo: "Obras En Proceso",
        descripcion: "Realización de nuestros proyectos y construcciones",
        carpeta: "obras-en-proceso"
    },
    {
        imagen: "assets/placeholder.svg",
        titulo: "Reforma Integral",
        descripcion: "Remodelación completa de apartamento en zona céntrica",
        carpeta: "reforma-integral"

    },
    {
        imagen: "assets/herreria.jpg",
        titulo: "Herreria",
        descripcion: "Construcciones industriales con estructura de acero",
        carpeta: "herreria"
    },
    {
        imagen: "assets/piscina.jpg",
        titulo: "Piscina y Deck",
        descripcion: "Instalación de piscinas y deck de madera",
        carpeta: "piscina-deck"
    },
     {
        imagen: "assets/imp.jpg",
        titulo: "Impermeabilización y Pintura",
        descripcion: "Impermeabilización y Pintura de techos y paredes",
        carpeta: "imp"
    }

];

function cargarProyectos() {
    const contenedor = document.getElementById('projects-container');
    
    proyectos.forEach((proyecto,index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.index=index
        card.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <div class="project-info">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
            </div>
        `;
        card.addEventListener('click', () => cargarDetalleProyecto(index));
        contenedor.appendChild(card);
    });
}


function cargarDetalleProyecto(index) {
    const proyecto = proyectos[index];
    const contenedor = document.getElementById('projects-container');

    contenedor.innerHTML = `
        <button id="volver-btn" class="btn-volver">← Volver a proyectos</button>
        <h1>${proyecto.titulo}</h1>
        <h3>${proyecto.descripcion}</h3>
        <div class="grid-imagenes" id="grid-imagenes">
            <!-- Las imágenes se cargarán aquí dinámicamente -->
        </div>
    `;
    
   
    cargarImagenesProyecto(proyecto.carpeta);
    
  
  const btnVolver = contenedor.querySelector('.btn-volver');
  btnVolver.addEventListener('click', function(e) {
    e.preventDefault();
    limpiar();
  });
}

function limpiar() {
    const contenedor = document.getElementById('projects-container');
    contenedor.innerHTML = '';
    cargarProyectos();
}

function cargarImagenesProyecto(carpeta) {
    const grid = document.getElementById('grid-imagenes');
    grid.innerHTML = ''; // Limpiar el grid
    
    const todasLasImagenes = [];

    for (let i = 1; i <= 15; i++) {
        todasLasImagenes.push(`assets/${carpeta}/imagen${i}.jpg`);
    }
    
    let imagenesMostradas = 0;
    const imagenesPorLote = 6; 
    
    function cargarLote() {
        const imagenesACargar = todasLasImagenes.slice(imagenesMostradas, imagenesMostradas + imagenesPorLote);
        
        imagenesACargar.forEach((imagenSrc) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'image-container';
            
            const img = document.createElement('img');
            img.src = imagenSrc;
            img.alt = `Imagen del proyecto ${carpeta}`;
            img.loading = 'lazy'; 
            
            img.addEventListener('error', function() {
                this.src = 'assets/placeholder.svg';
                this.alt = 'Imagen no disponible';
            });
            
            imgContainer.appendChild(img);
            grid.appendChild(imgContainer);
        });
        
        imagenesMostradas += imagenesPorLote;
        
        // Mostrar u ocultar el botón "Ver más"
        const btnVerMas = document.getElementById('ver-mas-btn');
        if (btnVerMas) {
            btnVerMas.style.display = imagenesMostradas >= todasLasImagenes.length ? 'none' : 'block';
        }
    }
    
    // Cargar primer lote
    cargarLote();
    
    // Agregar botón "Ver más" si hay más imágenes
    if (todasLasImagenes.length > imagenesPorLote) {
        const btnContainer = document.createElement('div');
        btnContainer.style.width = '100%';
        btnContainer.style.textAlign = 'center';
        btnContainer.style.margin = '30px 0';
        
        const btnVerMas = document.createElement('button');
        btnVerMas.id = 'ver-mas-btn';
        btnVerMas.className = 'btn-volver';
        btnVerMas.textContent = 'Ver más proyectos';
        btnVerMas.addEventListener('click', cargarLote);
        
        btnContainer.appendChild(btnVerMas);
        grid.parentNode.insertBefore(btnContainer, grid.nextSibling);
    }
}

document.addEventListener('DOMContentLoaded', cargarProyectos);

