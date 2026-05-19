// Obtener la fecha de hoy
const today = new Date()

const todayYear = today.getFullYear()
const todayMonth = String(today.getMonth() + 1)
const todayDay = String(today.getDate())
// console.log(todayDay, todayMonth, todayYear);
// console.log(typeof todayMonth);

function corregirFecha(dato) {
    if (dato.length == 1) {
        dato = "0" + dato
    }
    return dato
}

const fechaEntrada = document.getElementById('fechaEntrada')
const fechaHoy = `${todayYear}-${corregirFecha(todayMonth) }-${corregirFecha(todayDay)}`
fechaEntrada.value = fechaHoy
fechaEntrada.setAttribute('min', fechaHoy)

// Obtener la fecha de mañana


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
