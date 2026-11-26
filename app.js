// 2. Año automático en el pie de página
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
  "Trabajo en estudio",
];
const lista = document.querySelector("#lista-habilidades");
for (const habilidad of habilidades) {
  lista.innerHTML += `<li>${habilidad}</li>`;
}

// 7. Proyectos: arreglo de objetos
const proyectos = [
  {
    titulo: "You Seem Pretty Sad for a Girl So in Love",
    descripcion:
      "Tercer álbum de estudio, publicado en junio de 2026 con 13 canciones.",
    imagen: "img/YSPSFAGSIL.jpg",
    nuevo: true,
  },
  {
    titulo: "GUTS",
    descripcion:
      "Segundo álbum, de 2023, con un sonido más cercano al pop punk.",
    imagen: "img/guts.jpg",
    nuevo: false,
  },
  {
    titulo: "SOUR",
    descripcion: 'Álbum debut, de 2021, que incluye "drivers license".',
    imagen: "img/sour.jpg",
    nuevo: false,
  },
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

// 10. Servicios desde un arreglo de objetos
const servicios = [
  {
    titulo: "Composición",
    texto: "Escribo mis propias canciones, junto al productor Dan Nigro.",
  },
  {
    titulo: "Conciertos",
    texto: "Giras mundiales con shows en arenas y festivales.",
  },
  {
    titulo: "Actuación",
    texto: "Papeles en series de televisión y plataformas de streaming.",
  },
  {
    titulo: "Colaboraciones",
    texto:
      "Canciones y presentaciones con otros artistas, como Weezer y Robert Smith.",
  },
];

function crearServicio(servicio) {
  return `<article class="mini-tarjeta"><h3>${servicio.titulo}</h3><p>${servicio.texto}</p></article>`;
}

const listaServicios = document.querySelector("#servicios-lista");
for (const servicio of servicios) {
  listaServicios.innerHTML += crearServicio(servicio);
}

const totalServicios = document.querySelector("#total-servicios");
totalServicios.textContent = `Total: ${servicios.length} servicios`;

// 11. Práctica 4: lista de pendientes en localStorage (se ve en la consola)
if (localStorage.getItem("pendientes") === null) {
  const pendientesIniciales = ["Estudiar", "Practicar", "Descansar"];
  localStorage.setItem("pendientes", JSON.stringify(pendientesIniciales));
}

const listaPendientes = JSON.parse(localStorage.getItem("pendientes"));

if (!listaPendientes.includes("Publicar")) {
  listaPendientes.push("Publicar");
  localStorage.setItem("pendientes", JSON.stringify(listaPendientes));
}

let numeroPendiente = 1;
console.log("Mis pendientes:");
for (const tarea of listaPendientes) {
  console.log(`${numeroPendiente}. ${tarea}`);
  numeroPendiente = numeroPendiente + 1;
}

console.log(listaPendientes);

localStorage.setItem("usuario", "Jhos");
const usuario = localStorage.getItem("usuario");

if (usuario === null) {
  console.log("Hola, visitante");
} else {
  console.log(`Hola de nuevo, ${usuario}`);
}

// 12. Formulario de contacto con validación
const formulario = document.querySelector("#formulario");
const exito = document.querySelector("#mensaje-exito");
function mostrarError(id, texto) {
  document.querySelector(`#error-${id}`).textContent = texto;
}

function limpiarErrores() {
  for (const error of document.querySelectorAll(".error")) {
    error.textContent = "";
  }
  exito.textContent = "";
}

function validarNombre(nombre) {
  if (nombre.length < 3) {
    mostrarError("nombre", "Escribe al menos 3 letras.");
    return false;
  }
  return true;
}

function validarMensaje(mensaje) {
  if (mensaje.length < 10) {
    mostrarError("mensaje", "Escribe al menos 10 caracteres.");
    return false;
  }
  return true;
}

function validarCorreo(correo) {
  if (!correo.includes("@") || !correo.includes(".")) {
    mostrarError("correo", "Escribe un correo válido.");
    return false;
  }
  return true;
}
const campoMensaje = document.querySelector("#mensaje");
const contador = document.querySelector("#contador");
campoMensaje.addEventListener("input", function () {
  contador.textContent = `${campoMensaje.value.length} / 300`;
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  limpiarErrores();
  const nombre = document.querySelector("#nombre").value.trim();
  const correo = document.querySelector("#correo").value.trim();
  const mensaje = campoMensaje.value.trim();
  const okNombre = validarNombre(nombre);
  const okCorreo = validarCorreo(correo);
  const okMensaje = validarMensaje(mensaje);
  if (okNombre && okCorreo && okMensaje) {
    exito.textContent = `Gracias, ${nombre}. Tu mensaje fue enviado.`;
    formulario.reset();
    contador.textContent = "0 / 300";
  }
});

// 4. Modo oscuro (se recuerda con localStorage)
const botonTema = document.querySelector("#boton-tema");
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
    localStorage.setItem("tema", "oscuro");
  } else {
    botonTema.textContent = "Modo oscuro";
    localStorage.setItem("tema", "claro");
  }
});

// Al cargar la página, recuperar el tema guardado
if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("oscuro");
  botonTema.textContent = "Modo claro";
}

