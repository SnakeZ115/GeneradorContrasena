var reemplazos = {
    'a': '@',
    'b': '8',
    'c': '(',
    'd': '6',
    'e': '3',
    'g': '9',
    'i': '1',
    'o': '0',
    's': '$',
    't': '7',
    'z': '2'
};

function generarContraseña() {
    var frase = document.getElementById('frase').value;
    var contrasena = '';

    for(var i = 0; i < frase.length; i++) {
        var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
        var caracter = frase[i].toLowerCase();

        if(numeroAleatorio === 1 && reemplazos[caracter]) {
            caracter = reemplazos[caracter];
        } else if(numeroAleatorio === 3) {
            caracter = caracter.toUpperCase();
        }

        contrasena += caracter;
    }

    var caracteresAleatorios = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    while(contrasena.length < 12) {
        var randomChar = caracteresAleatorios.charAt(Math.floor(Math.random() * caracteresAleatorios.length));
        contrasena += randomChar;
    }

    document.getElementById('labelContra').innerText = contrasena;
}

function copiarAlPortapapeles() {
    const contraseña = document.getElementById("labelContra").textContent;
    try {
        navigator.clipboard.writeText(contraseña);
        alert("Contraseña copiada al portapapeles");
    } catch (err) {
        alert("Error al copiar al portapapeles");
    }
}