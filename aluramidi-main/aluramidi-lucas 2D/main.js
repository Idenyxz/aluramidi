// Pom ----------------------------------
function tocaSomPom () {
   document.querySelectorAll('#som_tecla_pom').play();
}

const listadeteclas = document.querySelectorAll('.tecla');

listadeteclas[0].onclick = tocaSomPom;
