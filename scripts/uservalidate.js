document.getElementsByClassName("container")[0].style.display = "none";
setTimeout(function() {
    document.getElementsByClassName("container")[0].style.display = "block";
}, 2000);
userValidateForHN(sessionStorage.getItem("hn_uid"), sessionStorage.getItem("hn_token"));

function userValidateForHN(uid, token) {
    var xhttp = new XMLHttpRequest();
    var url = "/homenode/node/user/iotcon.php"+"?user_id=" + uid + "&access_token=" + token + "&ses=1";
    xhttp.open("GET", url, true);
    xhttp.timeout = 2000;
    xhttp.ontimeout = function(e) {
        alert("Connection timeout");
        window.location.href = "http://localhost/homenode/v1/login/index.html";
    }
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
        else if (this.readyState == 4 && this.status == 401)  {
            alert("Unauthorized! Access Denied.");
            window.location.href = "http://localhost/homenode/v1/login/index.html";
        }
    }
    xhttp.send(null);
}