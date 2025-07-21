let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let precioConDescuento;


if(edad < 18){
    precioConDescuento = tarifaBase * 0.20;
}else if(edad >= 65){
    precioConDescuento = tarifaBase * 0.40;
}

tarifaBase = tarifaBase - precioConDescuento;

console.log("El precio final es: " + Number.parseFloat(tarifaBase).toFixed(2))