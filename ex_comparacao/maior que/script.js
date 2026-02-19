function comparar() {

    let v1 = Number(document.getElementById("valor1").value);
    let v2 = Number(document.getElementById("valor2").value);

    let resultado = (v1 > v2);

    document.getElementById("resultado").innerHTML =
        "1️⃣ Comparando: " + v1 + " > " + v2 + "<br>" +
        "2️⃣ Resultado: " + resultado;
}
