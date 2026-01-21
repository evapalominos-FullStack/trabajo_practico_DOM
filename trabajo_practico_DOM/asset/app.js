function repetir_palabra() {
    let palabra = document.getElementById("input_palabra").value;
    let veces = parseInt(document.getElementById("input_cantidad").value);
    let palabraRepetida = palabra.repeat(veces);
    document.getElementById("mensaje1").innerText = `${palabraRepetida}`;
};

function cambiar_color() {
    let mensaje = document.getElementsByClassName("rojo")[0];
    let colores = ["red", "green", "orange", "purple"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    mensaje.style.color = colorAleatorio;
}

function calcularOperaciones() {
    const inputs = document.getElementsByTagName('input');
    const botones = document.getElementsByTagName('button');

    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');

    const numero1 = Number(num1Input.value);
    const numero2 = Number(num2Input.value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir por cero";

    let mensaje = `Resultados:\nSuma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`;

    alert(mensaje);

    document.getElementById("resultados").innerHTML = `
        <h3>Resultados:</h3>
        <p>Suma: ${suma}</p>
        <p>Resta: ${resta}</p>
        <p>Multiplicación: ${multiplicacion}</p>
        <p>División: ${division}</p>`;
        
};

function invertirYMostrar() {
    const inputElement = document.getElementById('palabraInput'); 
    const palabra = inputElement.value; 

    const palabraInvertida = palabra.split('').reverse().join('');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.textContent = palabraInvertida; 
}
