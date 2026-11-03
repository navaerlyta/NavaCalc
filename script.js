document.addEventListener("DOMContentLoaded", function () {
  const btnCalc = document.getElementById("btn-calc");
  const btnReset = document.getElementById("btn-reset");

  if (btnCalc) {
    btnCalc.addEventListener("click", function () {
      let n1 = document.getElementById("num1").value;
      let n2 = document.getElementById("num2").value;
      let op = document.getElementById("operator").value;
      let res = document.getElementById("hasil");

      // Validasi input kosong
      if (n1 === "" || n2 === "") {
        res.textContent = "Please fill in both numbers!";
        res.style.color = "#d9534f";
        return;
      }

      n1 = parseFloat(n1);
      n2 = parseFloat(n2);
      let ans = 0;

      // Validasi pembagian dengan 0
      if (op === "/" && n2 === 0) {
        res.textContent = "Cannot divide by zero!";
        res.style.color = "#d9534f";
        return;
      }

      // Operasi Matematika
      if (op === "+") ans = n1 + n2;
      else if (op === "-") ans = n1 - n2;
      else if (op === "*") ans = n1 * n2;
      else if (op === "/") ans = n1 / n2;

      res.style.color = "#1e3a5f";
      res.textContent = ans;
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", function () {
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("operator").value = "+";

      let res = document.getElementById("hasil");
      res.textContent = "0";
      res.style.color = "#1e3a5f";
    });
  }
});