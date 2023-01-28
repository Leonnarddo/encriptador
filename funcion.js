const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    if (textArea.value != "") {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
    
}

function btnDesencriptar(){
    if (textArea.value != "") {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function btnCopiar(){
    var copiarMensaje = document.getElementById("mensaje");
    copiarMensaje.select();
    if (copiarMensaje != "") {
        navigator.clipboard.writeText(copiarMensaje.value);
        alert("Se copió el mensaje: " + copiarMensaje.value);
        mensaje.value = "";
        mensaje.style.backgroundImage = "url('./imagenes/cryptex.png')";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringdDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringdDesencriptada = stringdDesencriptada.toLowerCase();

    for (let i=0; i <matrizCodigo.length; i++){
        if(stringdDesencriptada.includes(matrizCodigo[i][1])){
            stringdDesencriptada = stringdDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringdDesencriptada;
}
