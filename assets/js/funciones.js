// Función que crea un arreglo de largo n, donde cada posición es el doble del anterior
function crearArregloDoble(n) {
    const arreglo = [];
    let valor = 1;
    for (let i = 0; i < n; i++) {
        arreglo.push(valor);
        valor *= 2;
    }
    return arreglo;
}

// Función que obtiene el mayor número de un arreglo de largo 10
function obtenerMayor(arreglo) {
    if (arreglo.length !== 10) {
        throw new Error("El arreglo debe tener exactamente 10 elementos.");
    }
    return Math.max(...arreglo);
}

// Función que obtiene un día de la semana dado su número
function obtenerDiaSemana(numero) {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    if (numero < 1 || numero > 7) {
        throw new Error("El número debe estar entre 1 y 7.");
    }
    return diasSemana[numero - 1];
}

// Función que busca un elemento en un arreglo de números
function buscarElemento(arreglo, elemento) {
    if (arreglo.length > 100) {
        throw new Error("El arreglo no puede tener más de 100 elementos.");
    }
    return arreglo.includes(elemento);
}

// Función que ordena un arreglo de números desordenados ascendentemente
function ordenarArregloAscendente(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

// Ejemplo de uso
console.log(crearArregloDoble(5)); // [1, 2, 4, 8, 16]
console.log(obtenerMayor([1, 23, 45, 67, 89, 2, 34, 56, 78, 90])); // 90
console.log(obtenerDiaSemana(3)); // Miércoles
console.log(buscarElemento([10, 20, 30, 40], 20)); // true
console.log(ordenarArregloAscendente([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]