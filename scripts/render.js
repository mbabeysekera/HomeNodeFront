window.onload = function() {
    document.getElementById("user_ac_name").innerHTML = sessionStorage.getItem("hn_uname");
}

function renderSliders(dataSet) {
    document.getElementById("temp").innerHTML = dataSet["user_data"]["temperature"];
    let sliders = document.getElementsByClassName("check_rem");
    dataSet["user_data"]["outdoor"]     == "1" ? sliders[0].checked = true : sliders[0].checked = false;
    dataSet["user_data"]["livingroom"]  == "1" ? sliders[1].checked = true : sliders[1].checked = false;
    dataSet["user_data"]["kitchen"]     == "1" ? sliders[2].checked = true : sliders[2].checked = false;
    dataSet["user_data"]["garage"]      == "1" ? sliders[3].checked = true : sliders[3].checked = false;
    dataSet["user_data"]["bedroom"]     == "1" ? sliders[4].checked = true : sliders[4].checked = false;
    dataSet["user_data"]["bathroom"]    == "1" ? sliders[5].checked = true : sliders[5].checked = false;
}

function getSliderData() {
    let user_id         = sessionStorage.getItem("hn_uid");
    let access_token    = sessionStorage.getItem("hn_token");

    let xhttp = new XMLHttpRequest();
    let url = "/homenode/node/user/iotcon.php"+"?user_id=" + user_id + "&access_token=" + access_token;
    xhttp.open("GET", url, true);
    xhttp.timeout = 1500;
    xhttp.ontimeout = function(e) {
        console.log("Rendering request timeout!");
    }
    xhttp.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            renderSliders(JSON.parse(this.responseText));
        }
        else if (this.readyState == 4 && this.status == 404)  {
            console.log("Data not available");
        }
    }
    xhttp.send(null);
}