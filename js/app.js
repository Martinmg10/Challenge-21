let vida = parseInt(prompt("Ingresa la vida de tu personaje"))


// Sin conectores logicos

if (vida > 100){

document.write("Numero no valido es mayor que 100");
}
else if (vida <1) {
 document.write("Ingresa un numero del 1 al 100")   
}

else if (vida > 81 ){
document.write("Modo ofensivo");
}
else if (vida > 51 ) {
    document.write("Modo moderado")
}
else if (vida > 21) {
    document.write("Modo defensivo");
}
else if (vida <= 20) {
    document.write("Corre!!")
}

else {
    document.write("numero no valido");
}


// Con conectores logicos


if (vida >=1 && vida <=20) {
    alert("huye es peligroso!!")

}

else if (vida >=21 && vida <=50)  {

  alert("ponte en modo defensivo!!")
}
else if (vida >=51 && vida <=80) {
    alert("ponte en modo moderado")
}
else if (vida >=81 && vida <=100) {
    alert("ponte en modo ofensivo")
}

else {
    alert("Ingresa un numero del 1 al 100")
}

