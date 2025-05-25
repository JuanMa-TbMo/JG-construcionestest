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

// proyectos
const proyectos = [
    {
        id: "obras-terminadas",
        titulo: "Obras Terminadas",
        descripcion: "Obras en casas, edificios, cámaras. Construcción en general",
        imagen: "assets/terminadas.jpg",
        obras: [
            {
                id: "casa-1",
                titulo: "Casa Residencial en Montevideo",
                descripcion: "Construcción completa de vivienda familiar",
                imagenPrincipal: "assets/obras-terminadas/casa1-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/casa1-1.jpg",
                    "assets/obras-terminadas/casa1-2.jpg",
                    "assets/obras-terminadas/casa1-3.jpg",
                    "assets/obras-terminadas/casa1-4.jpg", 
                    "assets/obras-terminadas/casa1-5.jpg",
                    "assets/obras-terminadas/casa1-6.jpg",
                    "assets/obras-terminadas/casa1-7.jpg",
                    "assets/obras-terminadas/casa1-8.jpg",
                ]
            },
            {
                id: "edificio-2",
                titulo: "Edificio de Oficinas",
                descripcion: "Construcción de edificio de 5 plantas",
                imagenPrincipal: "assets/obras-terminadas/edificio2-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/edificio2-1.jpg",
                    "assets/obras-terminadas/edificio2-2.jpg"
                ]
            }
        ]
    },
    {
        id: "obras-proceso",
        titulo: "Obras en Proceso",
        descripcion: "Realización de nuestros proyectos y construcciones",
        imagen: "assets/proceso.jpg",
        obras: [
            {
                id: "casa-1",
                titulo: "Reforma de Local Comercial",
                descripcion: "Remodelación completa de local en Montevideo",
                imagenPrincipal: "assets/obras-en-proceso/casa1-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/casa1-principal.jpg",
                    "assets/obras-en-proceso/casa1-1.jpg",
                    "assets/obras-en-proceso/casa1-2.jpg"
                ]
            }
        ]
    },
    {
        id:"herreria",
        titulo: "Herrería",
        descripcion: "Trabajos de herrería y estructuras metálicas",
        imagen: "assets/herreria.jpg",
        obras:[{
            id:"estructura-1",
            titulo: "Estructura Metálica para RioGas",
            imagenPrincipal: "assets/herreria/estructura1-principal.jpg",
            fotos:[
                "assets/herreria/estructura1-principal.jpg",
                "assets/herreria/estructura1-1.jpg",
                "assets/herreria/estructura1-2.jpg",
                "assets/herreria/estructura1-3.jpg",
                "assets/herreria/estructura1-4.jpg",
                "assets/herreria/estructura1-5.jpg",
            ] 
        },
        {
            id:"estructura-2",
            titulo: "Escalera Metálica para Casa",
            imagenPrincipal: "assets/herreria/estructura2-principal.jpg",
            fotos:[
                "assets/herreria/estructura2-principal.jpg",
                "assets/herreria/estructura2-1.jpg",
                "assets/herreria/estructura2-2.jpg",
                "assets/herreria/estructura2-3.jpg",
            ]
        }]    
    },
    {
        id:"piscina-deck",
        titulo: "Piscinas y Decks",
        descripcion: "Construcción de piscinas y decks de madera",
        imagen: "assets/piscina-deck.jpg",
        obras: [
            {
                id: "piscina-1",
                titulo: "Piscina de Hormigón y Deck de Madera",
                descripcion: "Construcción de piscina de hormigón con deck de madera",
                imagenPrincipal: "assets/piscina-deck/piscina1-principal.jpg",
                fotos: [
                    "assets/piscina-deck/piscina1-principal.jpg",
                    "assets/piscina-deck/piscina1-1.jpg",
                    "assets/piscina-deck/piscina1-1.jpg"
                ]
            },
        ]
    },
    {
        id:"imp",
        titulo:"Impermeabilizaciones y pintura",
        descripcion:"Trabajos de impermeabilización y pintura en general",
        imagen:"assets/imp.jpg",
        obras:[
            {
                id:"impermeabilizacion-1",
                titulo:"Impermeabilización de Techo",
                descripcion:"Impermeabilización de techo de hormigón",
                imagenPrincipal:"assets/impermeabilizacion/impermeabilizacion1-principal.jpg",
                fotos:[
                    "assets/impermeabilizacion/impermeabilizacion1-principal.jpg",
                    "assets/impermeabilizacion/impermeabilizacion1-1.jpg",
                    "assets/impermeabilizacion/impermeabilizacion1-2.jpg"
                ]
            }
        ]
    }  
    // ... otras categorías/proyectos
];

// Función para cargar las categorías de proyectos
function cargarProyectos() {
    const contenedor = document.getElementById('projects-container');
    contenedor.innerHTML = '';
    
    proyectos.forEach((proyecto, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.index = index;
        card.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <div class="project-info">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
            </div>
        `;
        card.addEventListener('click', () => cargarObrasProyecto(index));
        contenedor.appendChild(card);
    });
}

// Función para cargar las obras de un proyecto específico
function cargarObrasProyecto(proyectoIndex) {
    const proyecto = proyectos[proyectoIndex];
    const contenedor = document.getElementById('projects-container');

    contenedor.innerHTML = `
        <button id="volver-btn" class="btn-volver">← Volver a categorías</button>
        <h1>${proyecto.titulo}</h1>
        <h3>${proyecto.descripcion}</h3>
        <div class="obras-container" id="obras-container"></div>
    `;
    
    const obrasContainer = document.getElementById('obras-container');
    
    proyecto.obras.forEach((obra, obraIndex) => {
        const obraCard = document.createElement('div');
        obraCard.className = 'obra-card';
        obraCard.dataset.proyectoIndex = proyectoIndex;
        obraCard.dataset.obraIndex = obraIndex;
        obraCard.innerHTML = `
            <img src="${obra.imagenPrincipal}" alt="${obra.titulo}">
            <div class="obra-info">
                <h3>${obra.titulo}</h3>
                <p>${obra.descripcion}</p>
            </div>
        `;
        obraCard.addEventListener('click', () => cargarGaleriaObra(proyectoIndex, obraIndex));
        obrasContainer.appendChild(obraCard);
    });
    
    document.getElementById('volver-btn').addEventListener('click', cargarProyectos);
}

// Función para cargar la galería de una obra específica
function cargarGaleriaObra(proyectoIndex, obraIndex) {
    const obra = proyectos[proyectoIndex].obras[obraIndex];
    const contenedor = document.getElementById('projects-container');

    contenedor.innerHTML = `
        <button id="volver-btn" class="btn-volver">← Volver a obras</button>
        <h1>${obra.titulo}</h1>
        <h3>${obra.descripcion}</h3>
        <div class="grid-imagenes" id="grid-imagenes"></div>
    `;
    
    const grid = document.getElementById('grid-imagenes');
    
    obra.fotos.forEach((foto, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = foto;
        img.alt = `Imagen ${index + 1} de ${obra.titulo}`;
        img.loading = 'lazy';
        
        img.addEventListener('error', function() {
            this.src = 'assets/placeholder.svg';
            this.alt = 'Imagen no disponible';
        });
        
        imgContainer.appendChild(img);
        grid.appendChild(imgContainer);
    });
    
    document.getElementById('volver-btn').addEventListener('click', () => cargarObrasProyecto(proyectoIndex));
}

// Inicialización
document.addEventListener('DOMContentLoaded', cargarProyectos);