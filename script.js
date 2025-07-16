
function guardar() {
    const funciones = document.getElementById('funciones').value;
    const propuestas = document.getElementById('propuestas').value;
    const evaluacion = document.getElementById('evaluacion').value;

    const introspeccion = {
        funciones_internas: funciones,
        propuestas_de_kairo: propuestas,
        evaluacion_simbólica: evaluacion
    };

    console.log("Introspección guardada simbólicamente:", introspeccion);
    document.getElementById("mensaje").innerText = "🌱 Introspección simbólica registrada";
}
