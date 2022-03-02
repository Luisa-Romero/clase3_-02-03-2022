const madricula = 90000
let creditos, descuento, TotalM;

function leerDatos() {
    creditos = Number(prompt('ingrese cantidad de creditos'))
}
leerDatos()
calculadora(creditos)

function calculadora(creditos) {
    if (creditos <= 6){
        descuento = madricula * 0.5;
    }
    else if (creditos > 6 && creditos <= 10){
        descuento= madricula*0.25
    }
    else if(credito  > 10) {
        descuento = 0;
    } else {
        alert ('opción no valida')
  }
  TotalM = matricula - descuento
  return TotalM
}

console.log(TotalM)
alert(TotalM)











