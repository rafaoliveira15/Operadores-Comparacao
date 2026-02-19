function comparar() {

    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;

    let resultado = (v1 != v2);

    document.getElementById("resultado").innerHTML =
        "1️⃣ Valor 1: " + v1 + "<br>" +
        "2️⃣ Valor 2: " + v2 + "<br>" +
        "3️⃣ Operação: " + v1 + " != " + v2 + "<br>" +
        "4️⃣ Resultado: " + resultado + "<br><br>" +
        "Obs: Compara apenas o valor.";
}
