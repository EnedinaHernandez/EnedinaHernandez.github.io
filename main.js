// Creo una funcion que se ejecutara cuando hago click en el botton
function muestra_oculta(id) {
  // Declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
  let div = document.getElementById(id);
  // Uso el condicional IF para saber si el DIV esta oculto(display-none) o si esta vosible
  if (div.style.display == "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}
