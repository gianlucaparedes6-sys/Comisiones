function recuperarTexto(idcomponente) {

    let componente = document.getElementById(idcomponente);
    let valor = componente.value;
    return valor;
}
function recuperarFloat(idcomponente) {
    let valortexto = recuperarTexto(idcomponente);
    let valorfloat = parseFloat(valortexto);
    return valorfloat;
}
