function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.getElementById('btn-cita').addEventListener('click', function() {
    window.open('https://web.whatsapp.com/send?phone=59899616991', '_blank');
});
 // Optimizar el event listener del botón de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(cargarProyectos, 500);
  
  const whatsappBtn = document.getElementById('whatsapp-button');
  if(whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://api.whatsapp.com/send?phone=59899616991', '_blank', 'noopener,noreferrer');
    });
  }
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
                    "assets/obras-terminadas/casa1-principal.jpg",
                    "assets/obras-terminadas/casa1-1.jpg",
                    "assets/obras-terminadas/casa1-2.jpg",
                    "assets/obras-terminadas/casa1-3.jpg", 
                    "assets/obras-terminadas/casa1-5.jpg",
                    "assets/obras-terminadas/casa1-6.jpg",
                    "assets/obras-terminadas/casa1-7.jpg",
                    "assets/obras-terminadas/casa1-8.jpg",
                ]
            },
            {
                id: "cocina-1",
                titulo:"Remodelacion de cocina en apartamento",
                descripcion: "Remodelación completa de cocina en apartamento",  
                imagenPrincipal: "assets/obras-terminadas/cocina1-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/cocina1-principal.jpg",
                    "assets/obras-terminadas/cocina1-1.jpg",
                    "assets/obras-terminadas/cocina1-2.jpg",
                    "assets/obras-terminadas/cocina1-3.jpg",
                ]
            },
            {
                id:"casa-2",
                titulo: "Remodelación de casa en Montevideo",
                descripcion: "Remodelación completa de casa con ampliación",
                imagenPrincipal: "assets/obras-terminadas/casa2-principal.jpg",   
                fotos: [
                    "assets/obras-terminadas/casa2-principal.jpg",
                    "assets/obras-terminadas/casa2-1.jpg",
                    "assets/obras-terminadas/casa2-2.jpg",
                    "assets/obras-terminadas/casa2-3.jpg",
                    "assets/obras-terminadas/casa2-4.jpg",
                    "assets/obras-terminadas/casa2-5.jpg",
                    "assets/obras-terminadas/casa2-6.jpg",
                    "assets/obras-terminadas/casa2-7.jpg",
                ]
            },
            {
                id:"casa-3",
                titulo: "Reforma general de casa en Punta del Este",
                descripcion: "Reforma completa de casa con ampliación y remodelación",  
                imagenPrincipal: "assets/obras-terminadas/casa3-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/casa3-principal.jpg",
                    "assets/obras-terminadas/casa3-1.jpg",
                    "assets/obras-terminadas/casa3-2.jpg",
                    "assets/obras-terminadas/casa3-3.jpg",
                    "assets/obras-terminadas/casa3-4.jpg",
                    "assets/obras-terminadas/casa3-5.jpg",
                    "assets/obras-terminadas/casa3-6.jpg",
                    "assets/obras-terminadas/casa3-7.jpg",
                    "assets/obras-terminadas/casa3-8.jpg",
                    "assets/obras-terminadas/casa3-9.jpg",
                    "assets/obras-terminadas/casa3-10.jpg",
                ]
            },
            {
                id: "casa-4",
                titulo: "Construcción de casa en Ciudad de la Costa",
                descripcion: "Construcción completa de vivienda familiar",
                imagenPrincipal: "assets/obras-terminadas/casa4-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/casa4-principal.jpg",
                    "assets/obras-terminadas/casa4-1.jpg",
                    "assets/obras-terminadas/casa4-2.jpg",
                    "assets/obras-terminadas/casa4-3.jpg",
                    "assets/obras-terminadas/casa4-4.jpg",
                    "assets/obras-terminadas/casa4-5.jpg",
                    "assets/obras-terminadas/casa4-6.jpg",
                    "assets/obras-terminadas/casa4-7.jpg",
                    "assets/obras-terminadas/casa4-8.jpg",
                ]
            },
            {
                id: "barbacoa-1",
                titulo: "Barbacoa y patio en casa",
                descripcion: "Construcción de barbacoa y patio con piso de hormigón",
                imagenPrincipal: "assets/obras-terminadas/barbacoa1-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/barbacoa1-principal.jpg",
                    "assets/obras-terminadas/barbacoa1-1.jpg",
                    "assets/obras-terminadas/barbacoa1-2.jpg",
                    "assets/obras-terminadas/barbacoa1-3.jpg",
                    
                ]
            },
            {
                id: "contenedor-1",
                titulo: "Contenedor y Camara de frio para Otonello en centro comercial",
                descripcion: "Construcción de contenedor para uso comercial",   
                imagenPrincipal: "assets/obras-terminadas/contenedor1-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/contenedor1-principal.jpg",
                    "assets/obras-terminadas/contenedor1-1.jpg",
                    "assets/obras-terminadas/contenedor1-2.jpg",
                    "assets/obras-terminadas/contenedor1-3.jpg",
                    "assets/obras-terminadas/contenedor1-4.jpg",
                    "assets/obras-terminadas/contenedor1-5.jpg",
                    "assets/obras-terminadas/contenedor1-6.jpg",
                    "assets/obras-terminadas/contenedor1-7.jpg",
                    "assets/obras-terminadas/contenedor1-8.jpg",
                    

                ]
            },
            {
                id: "bano-1",
                titulo: "Baño remodelado en apartamento",
                descripcion: "Remodelación completa de baño",
                imagenPrincipal: "assets/obras-terminadas/bano1-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/bano1-principal.jpg",
                    "assets/obras-terminadas/bano1-1.jpg",
                    "assets/obras-terminadas/bano1-2.jpg",
                    "assets/obras-terminadas/bano1-3.jpg",
                ]
            },
              {
                id: "bano-2",
                titulo: "Baño para casa en Montevideo",
                descripcion: "Construcción de baño completo",
                imagenPrincipal: "assets/obras-terminadas/bano2-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/bano2-principal.jpg",
                    "assets/obras-terminadas/bano2-1.jpg",
                    "assets/obras-terminadas/bano2-2.jpg",
                    "assets/obras-terminadas/bano2-3.jpg",
                    "assets/obras-terminadas/bano2-4.jpg",
                ]
            },
            {
                id:"porche-1",
                titulo: "Porche de entrada en casa",
                descripcion: "Construcción de porche de entrada con estructura metálica",
                imagenPrincipal: "assets/obras-terminadas/porche1-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/porche1-principal.jpg",
                    "assets/obras-terminadas/porche1-1.jpg",
                    "assets/obras-terminadas/porche1-2.jpg",
                    "assets/obras-terminadas/porche1-3.jpg",
                   
                   
                ]
            },
            {
                id: "bano-3",
                titulo: "Baño remodelado en casa", 
                descripcion: "Remodelación completa de baño en casa particular",
                imagenPrincipal: "assets/obras-terminadas/bano3-principal.jpg",
                fotos: [
                    "assets/obras-terminadas/bano3-principal.jpg",
                    "assets/obras-terminadas/bano3-1.jpg",
                    "assets/obras-terminadas/bano3-2.jpg",
                    "assets/obras-terminadas/bano3-3.jpg",
                    "assets/obras-terminadas/bano3-4.jpg",
                ]
            },
            {
                id: "galpon-1", 
                titulo: "Galpon para almacenamiento",
                descripcion: "Construcción de galpón para uso doméstico",
                imagenPrincipal: "assets/obras-terminadas/galpon1-principal.jpg",  
                fotos: [
                    "assets/obras-terminadas/galpon1-principal.jpg",
                    "assets/obras-terminadas/galpon1-1.jpg",
                    "assets/obras-terminadas/galpon1-2.jpg",
                    "assets/obras-terminadas/galpon1-3.jpg",
                    "assets/obras-terminadas/galpon1-4.jpg",
                    "assets/obras-terminadas/galpon1-5.jpg",
                    "assets/obras-terminadas/galpon1-6.jpg",
                    "assets/obras-terminadas/galpon1-7.jpg",
                    "assets/obras-terminadas/galpon1-8.jpg",
                ]
            },
            {
                id:"porche-2",
                titulo: "Porche de entrada en casa",    
                descripcion: "Construcción de porche de entrada con estructura de madera",
                imagenPrincipal: "assets/obras-terminadas/porche2-principal.jpg",  
                fotos: [
                    "assets/obras-terminadas/porche2-principal.jpg",
                    "assets/obras-terminadas/porche2-1.jpg",
                    "assets/obras-terminadas/porche2-2.jpg",
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
                titulo: "Reforma de cocina en casa particular",
                descripcion: "Remodelación completa de cocina",
                imagenPrincipal: "assets/obras-en-proceso/cocina1-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/cocina1-principal.jpg",
                    "assets/obras-en-proceso/cocina1-1.jpg",
                    "assets/obras-en-proceso/cocina1-2.jpg",
                    "assets/obras-en-proceso/cocina1-3.jpg",
                    "assets/obras-en-proceso/cocina1-4.jpg",
                    "assets/obras-en-proceso/cocina1-5.jpg",
                    "assets/obras-en-proceso/cocina1-6.jpg",
                    "assets/obras-en-proceso/cocina1-7.jpg",
                    "assets/obras-en-proceso/cocina1-8.jpg",
                    "assets/obras-en-proceso/cocina1-9.jpg",
                    "assets/obras-en-proceso/cocina1-10.jpg",
                    "assets/obras-en-proceso/cocina1-11.jpg",
                    "assets/obras-en-proceso/cocina1-12.jpg",
                ]
            },
            {
                id: "contenedor-1",
                titulo: "Contenedor para Otonello en centro comercial",
                descripcion: "Construcción de contenedor para uso comercial",
                imagenPrincipal: "assets/obras-en-proceso/contenedor1-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/contenedor1-principal.jpg",
                    "assets/obras-en-proceso/contenedor1-1.jpg",
                    "assets/obras-en-proceso/contenedor1-2.jpg",
                    "assets/obras-en-proceso/contenedor1-3.jpg",
                    "assets/obras-en-proceso/contenedor1-4.jpg",
                    "assets/obras-en-proceso/contenedor1-5.jpg",
                    "assets/obras-en-proceso/contenedor1-6.jpg",
                    "assets/obras-en-proceso/contenedor1-7.jpg",
                  
                ]
            },
            {
                
                id:"casa-2",
                titulo: "Remodelación de casa en Montevideo",
                descripcion: "Remodelación completa de casa con ampliación",
                imagenPrincipal: "assets/obras-en-proceso/casa2-principal.jpg",   
                fotos: [
                    "assets/obras-en-proceso/casa2-principal.jpg",
                    "assets/obras-en-proceso/casa2-1.jpg",
                    "assets/obras-en-proceso/casa2-2.jpg",
                    "assets/obras-en-proceso/casa2-3.jpg",
                    "assets/obras-en-proceso/casa2-4.jpg",
                    "assets/obras-en-proceso/casa2-5.jpg",
                    "assets/obras-en-proceso/casa2-6.jpg",
                    "assets/obras-en-proceso/casa2-7.jpg",
                    "assets/obras-en-proceso/casa2-8.jpg",
                    "assets/obras-en-proceso/casa2-9.jpg",
                    "assets/obras-en-proceso/casa2-10.jpg",
                ]
            },
            {
                id: "casa-4",
                titulo: "construcción de casa en Ciudad de la Costa",
                descripcion: "Construcción completa de vivienda familiar",
                imagenPrincipal: "assets/obras-en-proceso/casa4-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/casa4-principal.jpg",
                    "assets/obras-en-proceso/casa4-1.jpg",
                    "assets/obras-en-proceso/casa4-2.jpg",
                    "assets/obras-en-proceso/casa4-3.jpg",
                    "assets/obras-en-proceso/casa4-4.jpg",
                    "assets/obras-en-proceso/casa4-5.jpg",
                    "assets/obras-en-proceso/casa4-6.jpg",
                  
                ]
            },
            {
                id:"vereda-1",
                titulo: "Construcción de vereda para casa",
                descripcion: "Construcción de vereda de hormigón",
                imagenPrincipal: "assets/obras-en-proceso/vereda1-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/vereda1-principal.jpg",
                    "assets/obras-en-proceso/vereda1-1.jpg",
                    "assets/obras-en-proceso/vereda1-2.jpg",
                    "assets/obras-en-proceso/vereda1-3.jpg",
                    "assets/obras-en-proceso/vereda1-4.jpg",
                    "assets/obras-en-proceso/vereda1-5.jpg",
                    "assets/obras-en-proceso/vereda1-6.jpg",
                ]
            },
            {
                id:"casa-3",
                titulo: "Reforma de casa en Punta del Este",
                descripcion: "Remodelación completa de casa con ampliación y remodelación",
                imagenPrincipal: "assets/obras-en-proceso/casa3-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/casa3-principal.jpg",
                    "assets/obras-en-proceso/casa3-1.jpg",
                    "assets/obras-en-proceso/casa3-2.jpg",
                    "assets/obras-en-proceso/casa3-3.jpg",
                    "assets/obras-en-proceso/casa3-4.jpg",
                    "assets/obras-en-proceso/casa3-5.jpg",
                    "assets/obras-en-proceso/casa3-6.jpg",
                    "assets/obras-en-proceso/casa3-7.jpg",
                    "assets/obras-en-proceso/casa3-8.jpg",
                    "assets/obras-en-proceso/casa3-9.jpg",
                ]
            },
            {
                id:"barbacoa-1",
                titulo: "Construcción de piso y barbacoa en casa",
                descripcion: "Construcción de piso de hormigon y barbacoa para casa ",
                imagenPrincipal: "assets/obras-en-proceso/barbacoa1-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/barbacoa1-principal.jpg",
                    "assets/obras-en-proceso/barbacoa1-1.jpg",
                    "assets/obras-en-proceso/barbacoa1-2.jpg",
                    "assets/obras-en-proceso/barbacoa1-3.jpg",
                    "assets/obras-en-proceso/barbacoa1-6.jpg",
                    "assets/obras-en-proceso/barbacoa1-8.jpg",
                ] 
            },
            {
                id:"bano-1",
                titulo: "Construcción de baño en casa",
                descripcion: "Construcción de baño completo en casa particular",
                imagenPrincipal: "assets/obras-en-proceso/bano1-principal.jpg",
                fotos: [
                    "assets/obras-en-proceso/bano1-principal.jpg",
                    "assets/obras-en-proceso/bano1-1.jpg",
                    "assets/obras-en-proceso/bano1-2.jpg",
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
            descripcion: "Construcción de estructura metálica para la empresa RioGas",
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
            descripcion: "Construcción de escalera metálica ",
            imagenPrincipal: "assets/herreria/estructura2-principal.jpg",
            fotos:[
                "assets/herreria/estructura2-principal.jpg",
                "assets/herreria/estructura2-1.jpg",
                "assets/herreria/estructura2-2.jpg",
                "assets/herreria/estructura2-3.jpg",
            ]
        },
        {
            id:"estructura-4",
            titulo: "Estructura indsutrial para RioGas",
            descripcion: "Construcción de estructura industrial para la empresa RioGas",
            imagenPrincipal: "assets/herreria/estructura4-principal.jpg",
            fotos:[
                "assets/herreria/estructura4-principal.jpg",
                "assets/herreria/estructura4-1.jpg",
                "assets/herreria/estructura4-2.jpg",
                "assets/herreria/estructura4-3.jpg",
                "assets/herreria/estructura4-5.jpg",
                "assets/herreria/estructura4-6.jpg",
                "assets/herreria/estructura4-7.jpg",
            ]
        },
        {
            id:"estructura-5",
            titulo: "Escalera Metálica para Casa",
            descripcion: "Construcción de escalera metálica para casa ", 
            imagenPrincipal: "assets/herreria/estructura5-principal.jpg",
            fotos:[
                "assets/herreria/estructura5-principal.jpg",
                "assets/herreria/estructura5-1.jpg",
                "assets/herreria/estructura5-2.jpg",
                "assets/herreria/estructura5-3.jpg",
                "assets/herreria/estructura5-4.jpg",
            ]

        },
        {
            id:"estructura-3",
            titulo: "Rejas de Seguridad para casa",
            descripcion: "Instalación de rejas de seguridad",
            imagenPrincipal: "assets/herreria/estructura3-principal.jpg",
            fotos:[
                "assets/herreria/estructura3-principal.jpg",
                "assets/herreria/estructura3-1.jpg",
                "assets/herreria/estructura3-2.jpg",
                "assets/herreria/estructura3-3.jpg",
                "assets/herreria/estructura3-4.jpg",

            ]
        }
        
    ]   

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
        imagen:"assets/imper.jpg",
        obras:[
            {
                id:"impermeabilizacion-1",
                titulo:"Impermeabilización de Techo",
                descripcion:"Impermeabilización de techo de hormigón",
                imagenPrincipal:"assets/imper/impermeabilizacion1-principal.jpg",
                fotos:[
                    "assets/imper/impermeabilizacion1-principal.jpg",
                    "assets/imper/impermeabilizacion1-1.jpg",
                    "assets/imper/impermeabilizacion1-2.jpg",
                    "assets/imper/impermeabilizacion1-3.jpg",
                    "assets/imper/impermeabilizacion1-4.jpg",
                    "assets/imper/impermeabilizacion1-5.jpg",
                ]
            },
            {
                id:"piso-1",
                titulo:"Impermeabilización de Piso",    
                descripcion:"Impermeabilización total en piso de madera ",
                imagenPrincipal:"assets/imper/piso1-principal.jpg",
                fotos:[
                    "assets/imper/piso1-principal.jpg",
                    "assets/imper/piso1-1.jpg",
                    "assets/imper/piso1-2.jpg",
                    "assets/imper/piso1-3.jpg",
                    "assets/imper/piso1-4.jpg",
                    "assets/imper/piso1-5.jpg",
                    "assets/imper/piso1-6.jpg",
                    "assets/imper/piso1-7.jpg",
                    "assets/imper/piso1-8.jpg",
                ]
            },
            {
                id:"impermeabilizacion-2",
                titulo:"Impermeabilización de Piso",
                descripcion:"Impermeabilización de piso de madera",
                imagenPrincipal:"assets/imper/impermeabilizacion2-principal.jpg", 
                fotos:[
                    "assets/imper/impermeabilizacion2-principal.jpg",
                    "assets/imper/impermeabilizacion2-1.jpg",
                    "assets/imper/impermeabilizacion2-2.jpg",
                    "assets/imper/impermeabilizacion2-3.jpg",
                    "assets/imper/impermeabilizacion2-4.jpg",
                ]
            },
            {
                id:"techo-1",
                titulo:"Impermeabilizacion y pintura de Techo",
                descripcion:"Impermeabilización y pintura de techo de hormigón",
                imagenPrincipal:"assets/imper/techo1-principal.jpg",
                fotos:[
                    "assets/imper/techo1-principal.jpg",
                    "assets/imper/techo1-1.jpg",
                    "assets/imper/techo1-2.jpg",
                    "assets/imper/techo1-3.jpg",
                    "assets/imper/techo1-4.jpg",
                ]
            },
            {
                id:"techo-2",
                titulo:"Impermeabilizacion y Arreglo en Techo en Montevideo",   
                descripcion:"Impermeabilización y reforma de una parte del techo de una casa en Montevideo",  
                imagenPrincipal:"assets/imper/techo2-principal.jpg",
                fotos:[
                    "assets/imper/techo2-principal.jpg",
                    "assets/imper/techo2-1.jpg",
                    "assets/imper/techo2-2.jpg",
                    "assets/imper/techo2-3.jpg",
                    "assets/imper/techo2-4.jpg",
                ]
            }
        ]
    } ,
    {
        id: "otros-proyectos",
        titulo: "Otros Proyectos",
        descripcion: "Proyectos diversos y trabajos especiales",
        imagen: "assets/otros-proyectos.jpg",
        obras: [
            {
                id: "proyecto-1",   
                titulo: "Bomba de Agua para Montevideo",
                descripcion: "Instalación de bomba de agua para abastecimiento en Montevideo",
                imagenPrincipal: "assets/otros-proyectos/proyecto1-principal.jpg",
                fotos: [ 
                        "assets/otros-proyectos/proyecto1-principal.jpg",
                        "assets/otros-proyectos/proyecto1-1.jpg",
                        "assets/otros-proyectos/proyecto1-2.jpg",
                ]
            },
            {
                id: "proyecto-2",
                titulo:"Instalacion de grasera",
                descripcion: "Instalación de grasera en casa particular",
                imagenPrincipal: "assets/otros-proyectos/proyecto2-principal.jpg",
                fotos: [
                    "assets/otros-proyectos/proyecto2-principal.jpg",
                    "assets/otros-proyectos/proyecto2-1.jpg",
                    "assets/otros-proyectos/proyecto2-2.jpg",
                    "assets/otros-proyectos/proyecto2-3.jpg",
                    "assets/otros-proyectos/proyecto2-4.jpg",
                ]

            },
                        {
                id:"puerta-1",
                titulo: "Instalación de puerta de corrediza",
                descripcion: "Instalación de puerta corrediza de madera",  
                imagenPrincipal: "assets/otros-proyectos/puerta1-principal.jpg",
                fotos: [
                    "assets/otros-proyectos/puerta1-principal.jpg",
                    "assets/otros-proyectos/puerta1-1.jpg",
                    "assets/otros-proyectos/puerta1-2.jpg",
                    "assets/otros-proyectos/puerta1-3.jpg",
                ]
            },
            {
                id: "puerta-2",
                titulo: "Instalación de puerta corrediza de madera",
                descripcion: "Instalación de puerta corrediza de madera en casa particular",
                imagenPrincipal: "assets/otros-proyectos/puerta2-principal.jpg",
                fotos: [
                    "assets/otros-proyectos/puerta2-principal.jpg",
                    "assets/otros-proyectos/puerta2-1.jpg",
                    "assets/otros-proyectos/puerta2-2.jpg",

                ]
            },
            {
                id: "caneria-1",
                titulo: "Instalación de cañería de agua",
                descripcion: "Instalación de cañería de agua para casa en ciudad de la costa",
                imagenPrincipal: "assets/otros-proyectos/caneria1-principal.jpg",
                fotos: [
                    "assets/otros-proyectos/caneria1-principal.jpg",
                    "assets/otros-proyectos/caneria1-1.jpg",
                    "assets/otros-proyectos/caneria1-2.jpg",
                    "assets/otros-proyectos/caneria1-3.jpg",
                    "assets/otros-proyectos/caneria1-4.jpg",
                ]
            }
        ]
    },
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
        card.addEventListener('click', () => {
            cargarObrasProyecto(index);
            document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
        });
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
        obraCard.addEventListener('click', () => {
            cargarGaleriaObra(proyectoIndex, obraIndex);
            document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
        });
        obrasContainer.appendChild(obraCard);
        
    });
    
      document.getElementById('volver-btn').addEventListener('click', () => {
        cargarProyectos();
        document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
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