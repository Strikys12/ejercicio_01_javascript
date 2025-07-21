let precioUnitario = 25.42;
let cantidad = 60.305;
let precioFinal;
let porcentaje;

if(cantidad < 10){
    porcentaje = 0
}else if(cantidad < 50){
    porcentaje = (precioUnitario * cantidad) * 0.10;
    
}else if(cantidad >=50){
    porcentaje = (precioUnitario * cantidad) * 0.20;
    
}

precioFinal = (precioUnitario * cantidad) - porcentaje 

console.log("El precio final es: " + Number.parseFloat(precioFinal).toFixed(2));