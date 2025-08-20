function mostrarArregloDoble() {
    const n = parseInt(document.getElementById("numeroElementos").value);
    const resultado = crearArregloDoble(n);
    document.getElementById("resultadoArregloDoble").innerText = `Resultado: ${resultado.join(", ")}`;
}

function mostrarMayorNumero() {
    const arreglo = document.getElementById("arregloNumeros").value.split(",").map(Number);
    if (arreglo.length !== 10) {
        document.getElementById("resultadoMayorNumero").innerText = "Error: El arreglo debe contener exactamente 10 números.";
        return;
    }
    const resultado = obtenerMayor(arreglo);
    document.getElementById("resultadoMayorNumero").innerText = `Mayor número: ${resultado}`;
}

function mostrarDiaSemana() {
    const numero = parseInt(document.getElementById("numeroDia").value);
    const resultado = obtenerDiaSemana(numero);
    document.getElementById("resultadoDiaSemana").innerText = `Día de la semana: ${resultado}`;
}

function mostrarBusquedaElemento() {
    const arreglo = document.getElementById("arregloBuscar").value.split(",").map(Number);
    const elemento = parseInt(document.getElementById("numeroBuscar").value);
    const resultado = buscarElemento(arreglo, elemento);
    document.getElementById("resultadoBusquedaElemento").innerText = resultado
        ? "El elemento está en el arreglo."
        : "El elemento no está en el arreglo.";
}

function mostrarArregloOrdenado() {
    const arreglo = document.getElementById("arregloOrdenar").value.split(",").map(Number);
    const resultado = ordenarArregloAscendente(arreglo);
    document.getElementById("resultadoArregloOrdenado").innerText = `Arreglo ordenado: ${resultado.join(", ")}`;
}