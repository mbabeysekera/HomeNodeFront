function userLogin() {
    var http = new XMLHttpRequest();
    var username = document.getElementById("usr").value;
    var password = document.getElementById("psw").value;
    var url = "http://localhost/homenode/node/user/login.php";
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onload = function() {
        if(this.status == "200") {
            validateUserLogin(this.responseText);
        }
    }
    http.send("username=" + username + "&password=" + password);
}

function validateUserLogin(response) {
    var loginAuthData = JSON.parse(response);
    if (loginAuthData["valid"] == true) {
        loadDashbord(loginAuthData);
    } else {
        alert(loginAuthData["error"]);
    }
}

function loadDashbord(userData) {
    // http = new XMLHttpRequest();
    // var url = "http://localhost/homenode/v1/hn/control.html";
    // http.open("GET", url, true);
    // http.setRequestHeader("Content-Type", "application/html");
    // http.onload = function() {
        
    // }
    // http.send();
    window.location.href = "http://localhost/homenode/v1/hn/control.html";
}