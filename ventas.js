const VENTAS_BASE = 5;


function calcularComision(numeroVentas,precioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras *(precioProducto * 0.1);
    }
    return comision;
}
function calcular(){
    //recuperamos los componentes de las cajas de textos
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteNVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");
//recuperamos los valores de los componentes
let sueldoBaseStr = componenteSueldoBase.value;
let numeroVentasStr = componenteNVentas.value;
let precioProductoStr = componentePrecio.value;
//transformamos el valor a numero
let sueldoBase = parseFloat(sueldoBaseStr);
let numeroVentas = parseFloat(numeroVentasStr);
let precioProducto = parseFloat(precioProductoStr);

let comision = calcularComision(numeroVentas,precioProducto);
let total= sueldoBase + comision;


//mostramos los resultados
let cpSueldoBase = document.getElementById("spSueldoBase");
let cpComision = document.getElementById("spComision");
let cpTotal = document.getElementById("spTotal");

cpSueldoBase.textContent=sueldoBase;
cpComision.textContent=comision;
cpTotal.textContent=total;
}