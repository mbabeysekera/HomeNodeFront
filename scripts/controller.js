var xhttp = new XMLHttpRequest();

window.onload = function() {
    document.getElementById("user_ac_name").innerHTML = sessionStorage.getItem("hn_uname");
}

document.getElementById("logout_btn").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "http://localhost/homenode/v1/login/index.html";
});

function onSliderMovement(data) {
    var url = "/gpio";
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onload = function() {
        if (this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.send("key=" + data);
}