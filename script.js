var alertButton = document.getElementById("alertButton");
var totalUsers = document.getElementById("totalUsers");
var totalSales = document.getElementById("totalSales");

alertButton.addEventListener("click", function() {
  alert(
    "Total Users: " + totalUsers.textContent + ", Total Sales: " + totalSales.textContent
  )
});