var secreto = 5;

var input = document.querySelector("input");


function verificar() {

    if (parseInt(input.value) == secreto) {
        alert("usted acerto");
    }
    else{
        alert("Usted erro");
    }    
    input.value="";
    input.focus;
}

var button = document.querySelector("button");
button.onclick = verificar;