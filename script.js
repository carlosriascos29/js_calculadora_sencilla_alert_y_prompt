/** Capa Lógica de Cálculos  */
function suma(primerValor, segundoValor) {
    return primerValor + segundoValor;
}

function resta(primerValor, segundoValor) {
    return primerValor - segundoValor;
}

function multiplicar(primerValor, segundoValor) {
    return primerValor * segundoValor;
}

function dividir(primerValor, segundoValor) {
    if (segundoValor > 0) {
        return primerValor / segundoValor;
    } else {
        return "No se puede dividir por cero";
    }
}

function raizCuadrada(valorBase) {
    return Math.sqrt(valorBase);
}

function raizCubica(valorBase) {
    return Math.cbrt(valorBase);
}

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

/** Capa de Presentación */
function main() {
    let control = 0;
    let arrParaValidarOpcionIngresada = [1, 2, 3, 4, 5, 6, 7, 0];
    let menu = "* * * * * M E N U - C A L C U L A D O R A * * * * * \n";
    menu += "1. Sumar \n";
    menu += "2. Restar \n";
    menu += "3. Multiplicar \n";
    menu += "4. Division \n";
    menu += "5. Raiz cuadrada \n";
    menu += "6. Raiz cubica \n";
    menu += "7. Potencia \n";
    menu += "0. Salir \n\n";
    menu += "Presiona el numero de la opción a ejecutar:";

    do {
        let valorIngresado = prompt(menu);

        if (arrParaValidarOpcionIngresada.includes(parseInt(valorIngresado))) {
            control = valorIngresado;
            if (control != 0) {
                calcular(parseInt(control));
            }
        } else {
            alert(
                "Solo debes ingresar el numero de la opción a ejecutar. \n Ningún otro valor es permitido."
            );
            control = 100;
        }
    } while (control != 0);
}

function calcular(opc) {
    let valorA, valorB;

    switch (opc) {
        case 1:
            valorA = prompt("Ingrese el primero valor:");
            valorB = prompt("Ingrese el segundo valor:");
            alert(
                `El resultado es: ${suma(parseInt(valorA), parseInt(valorB))}`
            );
            break;
        case 2:
            valorA = prompt("Ingrese el primero valor:");
            valorB = prompt("Ingrese el segundo valor:");
            alert(
                `El resultado es: ${resta(parseInt(valorA), parseInt(valorB))}`
            );
            break;
        case 3:
            valorA = prompt("Ingrese el primero valor:");
            valorB = prompt("Ingrese el segundo valor:");
            alert(
                `El resultado es: ${multiplicar(
                    parseInt(valorA),
                    parseInt(valorB)
                )}`
            );
            break;
        case 4:
            valorA = prompt("Ingrese el primero valor:");
            valorB = prompt("Ingrese el segundo valor:");
            alert(
                `El resultado es: ${dividir(
                    parseInt(valorA),
                    parseInt(valorB)
                )}`
            );
            break;
        case 5:
            valorA = prompt("Ingrese el valor que se debe calcular:");
            alert(`El resultado es: ${raizCuadrada(parseInt(valorA))}`);
            break;
        case 6:
            valorA = prompt("Ingrese el valor que se debe calcular:");
            alert(`El resultado es: ${raizCubica(parseInt(valorA))}`);
            break;
        case 7:
            valorA = prompt("Ingrese el valor de la base:");
            valorB = prompt("Ingrese el valor del exponente:");
            alert(
                `El resultado es: ${potencia(
                    parseInt(valorA),
                    parseInt(valorB)
                )}`
            );
            break;
        default:
            break;
    }
}

/** Ejecución del Programa */
main();
