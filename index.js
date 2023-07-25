function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "pass") {
      window.location.href = "admin.html"; // Redirect to admin.html
    } else if (username === "customer" && password === "123") {
      window.location.href = "Cafe.html"; // Redirect to index.html
    } else {
      alert("Username atau password salah!"); // Display error message
    }
  }