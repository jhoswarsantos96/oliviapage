let clics = 0;
const titulo = document.querySelector("h1");
titulo.addEventListener("click", function () {
  clics = clics + 1;
  titulo.textContent = `Clics: ${clics}`;
});

const anio = new Date().getFullYear();
document.querySelector("#anio").textContent = anio;

// 3. Saludo según la hora
const hora = new Date().getHours();
let saludo = "Buenas noches";
if (hora >= 5 && hora < 12) {
  saludo = "Buenos días";
} else if (hora >= 12 && hora < 19) {
  saludo = "Buenas tardes";
}
const mensaje = `${saludo}, gracias por tu visita`;
document.querySelector("#saludo").textContent = mensaje;

// 4. Modo oscuro
const botonTema = document.querySelector("#boton-tema");
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
    botonTema.textContent = "Modo oscuro";
  }
});

// 5. Leer más
const textoExtra = document.querySelector("#texto-extra");
const botonLeer = document.querySelector("#leer-mas");
botonLeer.addEventListener("click", function () {
  textoExtra.classList.toggle("oculto");
  if (textoExtra.classList.contains("oculto")) {
    botonLeer.textContent = "Leer más";
  } else {
    botonLeer.textContent = "Leer menos";
  }
});

// 6. Habilidades desde un arreglo
const habilidades = [
  "Composición de canciones",
  "Canto",
  "Piano y guitarra",
  "Actuación",
  "Presencia en escenario",
  "Trabajo en estudio"
];
const lista = document.querySelector("#lista-habilidades");
for (const habilidad of habilidades) {
  lista.innerHTML += `<li>${habilidad}</li>`;
}

// 7. Proyectos: arreglo de objetos
const proyectos = [
  {
    titulo: "You Seem Pretty Sad for a Girl So in Love",
    descripcion: "Tercer álbum de estudio, publicado en junio de 2026 con 13 canciones.",
    imagen: "img/YSPSFAGSIL.jpg",
    nuevo: true
  },
  {
    titulo: "GUTS",
    descripcion: "Segundo álbum, de 2023, con un sonido más cercano al pop punk.",
    imagen: "img/guts.jpg",
    nuevo: false
  },
  {
    titulo: "SOUR",
    descripcion: 'Álbum debut, de 2021, que incluye "drivers license".',
    imagen: "img/sour.jpg",
    nuevo: false
  }
];

// 8. Función que crea una tarjeta de proyecto
function crearTarjeta(proyecto) {
  let etiqueta = "";
  if (proyecto.nuevo) {
    etiqueta = `<span class="etiqueta">Nuevo</span>`;
  }
  return `<article class="proyecto">${etiqueta}
    <img src="${proyecto.imagen}" alt="Portada del álbum ${proyecto.titulo}">
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
  </article>`;
}

// 9. Mostrar los proyectos y el total
const galeria = document.querySelector("#galeria");
for (const proyecto of proyectos) {
  galeria.innerHTML += crearTarjeta(proyecto);
}
const total = document.querySelector("#total-proyectos");
total.textContent = `Total: ${proyectos.length} proyectos`;

// 10. Servicios desde un arreglo de objetos (reto)
const servicios = [
  { titulo: "Composición", texto: "Escribo mis propias canciones, junto al productor Dan Nigro." },
  { titulo: "Conciertos", texto: "Giras mundiales con shows en arenas y festivales." },
  { titulo: "Actuación", texto: "Papeles en series de televisión y plataformas de streaming." },
  { titulo: "Colaboraciones", texto: "Canciones y presentaciones con otros artistas, como Weezer y Robert Smith." }
];

function crearServicio(servicio) {
  return `<article class="mini-tarjeta"><h3>${servicio.titulo}</h3><p>${servicio.texto}</p></article>`;
}

const listaServicios = document.querySelector("#servicios-lista");
for (const servicio of servicios) {
  listaServicios.innerHTML += crearServicio(servicio);
}

// 11. Total de servicios (usa la clase .total, que tiene el color acento)
const totalServicios = document.querySelector("#total-servicios");
totalServicios.textContent = `Total: ${servicios.length} servicios`;
