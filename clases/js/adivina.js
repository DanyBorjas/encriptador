function saltarLinea() {
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
}

function imprimir(frase){
    document.write(frase);
    saltarLinea();
}


var numeroPensado = Math.round(Math.random()*10);
var numeroLanzado = parseInt( prompt("Adivine un numero del 0 al 10"));

if (numeroPensado == numeroLanzado){
    imprimir("Correcto");
}
else{
    imprimir("Incorrecto era: "+numeroPensado);
} 