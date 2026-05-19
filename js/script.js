// Obtener el input de fecha de entrada y salida
const fechaEntrada = document.getElementById('fechaEntrada')
const fechaSalida = document.getElementById('fechaSalida')

// Obtener la fecha de hoy
const today = new Date()

const todayYear = today.getFullYear()
const todayMonth = String(today.getMonth() + 1)
const todayDay = String(today.getDate())

// Definir la fecha de hoy
const fechaHoy = `${todayYear}-${corregirFecha(todayMonth) }-${corregirFecha(todayDay)}`
fechaEntrada.value = fechaHoy
fechaEntrada.setAttribute('min', fechaHoy)

// Obtener la fecha de mañana
let tomorrow = today.getTime()+(1000*60*60*24)
tomorrow = new Date(tomorrow)
const tomorrowDay = tomorrow.getDate()
const tomorrowMonth = String(tomorrow.getMonth() + 1)
const tomorrowYear = String(tomorrow.getFullYear())

const fechaTomorrow = `${tomorrowYear}-${corregirFecha(tomorrowMonth) }-${corregirFecha(tomorrowDay)}`
// console.log(fechaTomorrow);
fechaSalida.value = fechaTomorrow
fechaSalida.setAttribute('min', fechaSalida)

// Obtener el formulario
const formReserva = document.forms["formReserva"];
// Aplicar el evento submit al formulario
formReserva.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = formReserva["nombre"].value.trim();
  let apellido = formReserva["apellido"].value.trim();
  let fechaEntrada = formReserva["fechaEntrada"].value;
  let fechaSalida = formReserva["fechaSalida"].value;
});


function corregirFecha(dato) {
    if (dato.length == 1) {
        dato = "0" + dato
    }
    return dato
}