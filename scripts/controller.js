function initSliders() {
    let sliders = document.getElementsByClassName("check_rem");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("click", onSliderMovement);
    }
}

function onSliderMovement() {
    let user_id         = sessionStorage.getItem("hn_uid");
    let access_token    = sessionStorage.getItem("hn_token");
    let outdoor         = document.getElementById("outdoor").checked ? 1 : 0;
    let livingroom      = document.getElementById("livingroom").checked ? 1 : 0;
    let kitchen         = document.getElementById("kitchen").checked ? 1 : 0;
    let garage          = document.getElementById("garage").checked ? 1 : 0;
    let bedroom         = document.getElementById("bedroom").checked ? 1 : 0;
    let bathroom        = document.getElementById("bathroom").checked ? 1 : 0;

    let xhttp = new XMLHttpRequest();
    let url = "/homenode/node/user/iotcon.php";
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.timeout = 1500;
    xhttp.ontimeout = function(e) {
        alert("Data not sent! Try Again.");
    }
    xhttp.onload = function() {
        if (this.status == 201) {
            // console.log("get user data " + JSON.parse(this.responseText)["valid"]);
        }
    };
    xhttp.send(   "user_id="        + user_id
                + "&outdoor="       + outdoor
                + "&livingroom="    + livingroom
                + "&kitchen="       + kitchen
                + "&garage="        + garage
                + "&bedroom="       + bedroom
                + "&bathroom="      + bathroom
                + "&access_token="  + access_token
    );
}

initSliders();

setTimeout(function() {
    document.getElementsByClassName("container")[0].style.display = "block";
    getSliderData();
}, 2000);

setInterval(() => {
    getSliderData();
}, 5000);

document.getElementById("logout_btn").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "http://localhost/homenode/v1/login/index.html";
});