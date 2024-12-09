function calculadora() {
    let continuar = true;

    // Bucle while para mantener la calculadora en funcionamiento
    while (continuar) {

    let operacion = prompt("Selecciona una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");

    if (operacion === '5') {
        continuar = false; 
        alert("¡Gracias por usar la calculadora!");
        break;
    }

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));


    let resultado;

    if (operacion === '1') {
        resultado = num1 + num2; 
        alert("El resultado de la suma es: " + resultado);
    } else if (operacion === '2') {
        resultado = num1 - num2; 
        alert("El resultado de la resta es: " + resultado);
    } else if (operacion === '3') {
        resultado = num1 * num2; 
        alert("El resultado de la multiplicación es: " + resultado);
    } else if (operacion === '4') {
        if (num2 !== 0) {
        resultado = num1 / num2;
        alert("El resultado de la división es: " + resultado);
        } else {
        alert("No se puede dividir entre cero.");
        }
    } else {
        alert("Opción no válida. Inténtalo de nuevo.");
    }
    }
}

calculadora();