function userValidateForHN(uid, token) {
    let xhttp = new XMLHttpRequest();
    let url = "/homenode/node/user/iotcon.php"+"?user_id=" + uid + "&access_token=" + token + "&ses=1";
    xhttp.open("GET", url, true);
    xhttp.timeout = 2000;
    xhttp.ontimeout = function(e) {
        alert("Connection timeout");
        window.location.href = "http://localhost/homenode/v1/login/index.html";
    }
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("user access " + JSON.parse(this.responseText)["valid"]);
        }
        else if (this.readyState == 4 && this.status == 401)  {
            alert("Unauthorized! Access Denied.");
            window.location.href = "http://localhost/homenode/v1/login/index.html";
        }
    }
    xhttp.send(null);
}

document.getElementsByClassName("container")[0].style.display = "none";

userValidateForHN(sessionStorage.getItem("hn_uid"), sessionStorage.getItem("hn_token"));