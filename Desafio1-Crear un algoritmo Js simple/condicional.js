console.log('Validación que se haya enlazado con el HTML')

//Hola Germán, hice los dos desafíos (Algoritmo y condicional) en el mismo lugar, espero no haya problema
//Inicialmente lo había hecho en dos archivos .js aparte, pero decidí dejarlo todo en el condicional.js

let nombreUsuario = prompt("Ingresa tu nombre");
//Aquí se puede ver el algoritmo sencillo y en el alert de salido en el segundo if
let cargoUsuario = ("Hola" + " " + nombreUsuario + " " + "¡Bienvenido a mi desafío de JavaScript")


//Aquí se puede ver el desafío del condicional
if (nombreUsuario == "") {
    alert("Por favor, ingresa tu nombre");
}
//segundo if
if ((nombreUsuario === "German") || (nombreUsuario === "german") || (nombreUsuario === "Germán") || (nombreUsuario === "germán")) { 
    alert (cargoUsuario);
}

else {
    alert ("No eres mi tutor, abandona este sitio o explotará en 5, 4, 3...")
}





