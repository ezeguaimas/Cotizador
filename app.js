function calcular() {
    const aporte = parseFloat(document.getElementById("aporte").value);
    const anssal = parseFloat(document.getElementById("anssal").value);
    let sueldoBruto = (aporte + anssal) / 0.03;
  
    const montoMaximo = 642142.18;
  
    if (sueldoBruto > montoMaximo) {
      sueldoBruto = montoMaximo;
    }
  
    const aporteOS = sueldoBruto * 0.0765;
  
    // Mostramos los resultados en el HTML
    document.getElementById("sueldo_bruto").textContent = sueldoBruto.toFixed(2);
    document.getElementById("aporte_os").textContent = aporteOS.toFixed(2);
  }
  
  const borrarBtn = document.getElementById("borrar");
  borrarBtn.addEventListener("click", function () {
    document.getElementById("anssal").value = 0;
    document.getElementById("aporte").value = 0;
  });
  