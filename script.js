function Mudarestado(estado) {
    var display = document.getElementById(estado).style.display;

    if(display == "none") {
        document.getElementById(estado).style.display = 'flex';
        document.querySelector(".estadoDisplay").innerHTML = "Ocultar Projetos"
    }
    else {
        document.getElementById(estado).style.display = 'none';
        document.querySelector(".estadoDisplay").innerHTML = "Veja todos"
    }
}