function calculateEMI() {
  var p = parseFloat(document.getElementById("amount").value);
  var r = parseFloat(document.getElementById("rate").value) / 12 / 100;
  var n = parseFloat(document.getElementById("years").value) * 12;
  var emi = (p * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
  var total = emi * n;
  document.getElementById("emi").innerText = "₹" + emi.toFixed(2);
  document.getElementById("interest").innerText = "₹" + (total-p).toFixed(2);
  document.getElementById("payment").innerText = "₹" + total.toFixed(2);
}
