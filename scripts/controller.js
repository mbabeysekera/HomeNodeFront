function onButtonClick(data) {
    var url = "";
    var xhttp = new XMLHttpRequest();
    if (data === 'logout') {
        url = "/login";
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader('Content-Type', 'text/html'); 
        xhttp.onload = function() {
            if (this.status == 200) {
                document.write(this.responseText);
                window.location = url; 
            }
        };
        xhttp.send();
    }
    else {
        url = "/gpio";
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.onload = function() {
            if (this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.send("key=" + data);
    }
}