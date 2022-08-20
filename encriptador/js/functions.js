var vocales = ["a","e","i","o","u"];
var crypt = ["ai","enter","imes","ober","ufat"];

function encriptar(msg){
    var cryptedMsg = "";
    for (pos = 0 ; pos < msg.length; pos++) {
        //Switch encuentra la vocal y la sustituye por el encriptado
        switch(msg[pos]){
            case "a":
                cryptedMsg = cryptedMsg + crypt[0];
                break;
            case "e": 
                cryptedMsg = cryptedMsg + crypt[1];
                break;
            case "i":    
                cryptedMsg = cryptedMsg + crypt[2];
                break;        
            case "o":
                cryptedMsg = cryptedMsg + crypt[3];
                break;
            case "u":
                cryptedMsg = cryptedMsg + crypt[4];
                break;        
            default:
                cryptedMsg = cryptedMsg + msg[pos];
                break;
        }   
    }   
    return cryptedMsg;
}
function print(write){
    document.write(write);
    document.write("<br>")
}

function desencriptar(uncryptMsg){
    var decrypt = "";
    for(pos = 0;pos<uncryptMsg.length;pos++){
        //Sustituir if con Switch
        //Encuentra la vocal y salta la posiscion del arreglo los caracteres del encriptado
        switch (uncryptMsg[pos]){
            case "a":
                decrypt = decrypt + "a";
                pos++;
                break;
            case "e":
                decrypt = decrypt + "e";
                pos = pos + 4;
                break;
            case "i":
                decrypt = decrypt + "i";
                pos = pos + 3;
                break;
            case "o":
                decrypt = decrypt + "o";
                pos = pos + 3;
                break;
            case "u":
                decrypt = decrypt + "u";
                pos = pos + 3;
                break;
            default:
                decrypt =decrypt + uncryptMsg[pos];
                break;
}
    }
   return decrypt;
}
function test(){
    var mensaje = "esto es una prueba"
    print(encriptar(mensaje));
    print(desencriptar(encriptar(mensaje)));
}

test();