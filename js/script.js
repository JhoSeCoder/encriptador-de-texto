const enteredText = document.getElementById("enteredText");
const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDecrypt = document.getElementById("buttonDecrypt");
const finalMessage = document.getElementById("finalMessage");
const buttonCopy = document.getElementById("buttonCopy");
const doll = document.getElementById("doll");
const hiddenMessage = document.getElementById("hiddenMessage");
const blockTwo = document.getElementById("blockTwo");

const matrixCode = [
    ["e", "enter"], // index 0
    ["i", "imes"],  // index 1
    ["a", "ai"],    // index 2
    ["o", "ober"],  // index 3
    ["u", "ufat"],  // index 4
];

const replace = (newValue) => {
    finalMessage.innerHTML = newValue;
    doll.classList.add("hidden");
    enteredText.value = "";
    hiddenMessage.style.display = "none";
    buttonCopy.style.display = "block";
    blockTwo.classList.add("adjust");
    finalMessage.classList.add("adjust");
}

const reset = () => {
    finalMessage.innerHTML = "";
    doll.classList.remove("hidden");
    hiddenMessage.style.display = "block";
    buttonCopy.style.display = "none";
    blockTwo.classList.remove("adjust");
    finalMessage.classList.remove("adjust");
    enteredText.focus();
}


// Función para ejecutar encriptado de texto al hacer click en el boton Encriptar.
function btnEncrypt() {
    const textEncrypt = encrypt(enteredText.value) + "\n";
    replace(textEncrypt);
    finalMessage.innerHTML = textEncrypt;
}

// Función que encripta el texto.
function encrypt(encryptedPhrase) {
    for (let i = 0; i < matrixCode.length; i++) {
        if (encryptedPhrase.includes(matrixCode[i][0])) {
            encryptedPhrase = encryptedPhrase.replaceAll(
                matrixCode[i][0],
                matrixCode[i][1]
            );
        }
    }
    return encryptedPhrase;
}

// Función para ejecutar desencriptado de texto al hacer click en el boton Desencriptar.
function btnDecrypt() {
    const textDecrypt = decrypt(enteredText.value) + "\n";
    replace(textDecrypt);
    finalMessage.innerHTML = textDecrypt;
}

// Función que desencripta el texto copiado.
function decrypt(decryptPhrase) {
    for (let i = 0; i < matrixCode.length; i++) {
        if (decryptPhrase.includes(matrixCode[i][0])) {
            decryptPhrase = decryptPhrase.replaceAll(
                matrixCode[i][1],
                matrixCode[i][0]
            );
        }
    }
    return decryptPhrase;
}

// Función que copia el texto encriptado.
function btnCopy() {
    let textCopy = finalMessage;
    textCopy.select();
    document.execCommand('copy');
    alert("Texto copiado");
    reset();
}
