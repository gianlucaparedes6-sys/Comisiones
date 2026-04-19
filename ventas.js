const VENTAS_BASE = 5;


function calcularComision(numeroVentas,precioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras *(precioProducto * 0.1);
    }
    return comision;
}
function validarCampo(idInput){
    let valor = recuperarTexto(idInput);
    let error = document.getElementById("error_" + idInput);

    // vacío
    if(valor.trim() === ""){
        error.textContent = "Campo obligatorio";
        return false;
    }

    // solo números
    if(isNaN(valor)){
        error.textContent = "Solo números";
        return false;
    }

    // máximo 5 dígitos
    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    // válido
    error.textContent = "";
    return true;
}
function calcular(){
   if(
    !validarCampo("txtSueldoBase") ||
    !validarCampo("txtVentas") ||
    !validarCampo("txtPrecio")
){
    return;
}
    //recuperamos los componentes de las cajas de textos
   //recuperamos los valores de los componentes todo esto desde utilitarios.js



let sueldoBase = recuperarFloat("txtSueldoBase");
let numeroVentas = recuperarFloat("txtVentas");
let precioProducto = recuperarFloat("txtPrecio");
let comision = calcularComision(numeroVentas,precioProducto);
let total= sueldoBase + comision;
//mostramos los resultados
let cpSueldoBase = document.getElementById("spSueldoBase");
let cpComision = document.getElementById("spComision");
let cpTotal = document.getElementById("spTotal");
cpSueldoBase.textContent = sueldoBase.toFixed(2);
cpComision.textContent = comision.toFixed(2);
cpTotal.textContent = total.toFixed(2);
}