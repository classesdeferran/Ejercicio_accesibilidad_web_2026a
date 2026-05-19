// Obtener el input de fecha de entrada y salida
const fechaEntrada = document.getElementById("fechaEntrada");
const fechaSalida = document.getElementById("fechaSalida");

// Obtener los elementos HTML para los mensajes de error
const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");

// Obtener la fecha de hoy
const today = new Date();

const todayYear = today.getFullYear();
const todayMonth = String(today.getMonth() + 1);
const todayDay = String(today.getDate());

// Definir la fecha de hoy
const fechaHoy = `${todayYear}-${corregirFecha(todayMonth)}-${corregirFecha(todayDay)}`;
fechaEntrada.value = fechaHoy;
fechaEntrada.setAttribute("min", fechaHoy);

// Obtener la fecha de mañana
addDayToDate(today);

// Obtener el formulario
const formReserva = document.forms["formReserva"];
// Aplicar el evento submit al formulario
formReserva.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = formReserva["nombre"].value.trim();
  let apellido = formReserva["apellido"].value.trim();
  let fechaEntrada = formReserva["fechaEntrada"].value;
  let fechaSalida = formReserva["fechaSalida"].value;
  let estancia = formReserva['estancia'].value

  let errores = false;

  if (nombre.length < 2) {
    errorNombre.textContent = "Por favor, mínimo dos caracteres";
    errores = true;
  }
  if (apellido.length < 2) {
    errorApellido.textContent = "Por favor, mínimo dos caracteres";
    errores = true;
  }

  if (errores) {
    alert("Por favor corrija los errores");
    return;
  }

  let mensajeFinal = `
  Datos de la reserva:
  Nombre: ${nombre} ${apellido}
  Régimen de estancia: ${estancia}
  Fecha de entrada: ${fechaEntrada}
  Fecha de salida: ${fechaSalida}
  `

  const final = confirm(mensajeFinal)

  if (final) {
    alert("Reserva realizada")
  } else {
    alert('Reserva cancelada')
  }
  formReserva.reset()

});

// Evento de la fecha de entrada
fechaEntrada.addEventListener("change", () => {
  let fechaEntradaDia = fechaEntrada.value;
  let fechaSalidaDia = fechaSalida.value;
  console.log(fechaEntradaDia, fechaSalidaDia);

  if (fechaSalidaDia > fechaEntradaDia) {
    console.log("No hay que hacer nada");
    return;
  }
  let newDate = new Date(fechaEntradaDia);
  newDate = addDayToDate(newDate);
  alert(`Atención : fecha de salida cambiada a ${newDate}`);
});

function corregirFecha(dato) {
  if (dato.length == 1) {
    dato = "0" + dato;
  }
  return dato;
}

function addDayToDate(fecha) {
  // Obtener la fecha de mañana
  let tomorrow = fecha.getTime() + 1000 * 60 * 60 * 24;
  tomorrow = new Date(tomorrow);
  const tomorrowDay = tomorrow.getDate();
  const tomorrowMonth = String(tomorrow.getMonth() + 1);
  const tomorrowYear = String(tomorrow.getFullYear());

  const fechaTomorrow = `${tomorrowYear}-${corregirFecha(tomorrowMonth)}-${corregirFecha(tomorrowDay)}`;
  // console.log(fechaTomorrow);
  fechaSalida.value = fechaTomorrow;
  fechaSalida.setAttribute("min", fechaSalida);
  return fechaTomorrow;
}
