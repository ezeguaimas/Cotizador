function calcular() {
  // Tomamos los valores ingresados en los inputs
  const aporte = parseFloat(document.getElementById("aporte").value);
  const anssal = parseFloat(document.getElementById("anssal").value);

  // Realizamos los cálculos
  const sueldo_bruto = (aporte + anssal) / 0.03;
  const aporte_os = sueldo_bruto * 0.0765;

  // Mostramos los resultados en el HTML
  document.getElementById("sueldo_bruto").textContent = sueldo_bruto.toFixed(2);
  document.getElementById("aporte_os").textContent = aporte_os.toFixed(2);
}

const borrarBtn = document.getElementById("borrar");
borrarBtn.addEventListener("click", function () {
  document.getElementById("my-form").reset();
});
