
let photoArray = [{"name":"LAB", "src":"Kuvat/LAB.jpg"}, {"name":"LUT", "src":"Kuvat/LUT.jpg"}, {"name":"Osoite: Yliopistonkatu 36, LPR", "src":"Kuvat/LPR.jpg"}];
let i = 0;
let toiminnonTunniste = 0;

function init(){
    if (localStorage.hasOwnProperty('carusel-img')) {
    i = localStorage.getItem("carusel-img");
    }
    else i = 0;

    document.getElementById("carusel-img").src = photoArray[i].src;
    document.getElementById("name").textContent = photoArray[i].name;

}

function previousPhoto() {
    if (i > 0) {
        i--;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    else {
        i = photoArray.length-1;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    localStorage.setItem("carusel-img", i);
}

function nextPhoto() {

    if (i < photoArray.length - 1) {
        i++;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    else {
        i = 0;
        document.getElementById("carusel-img").src = photoArray[i].src;
        document.getElementById("name").textContent = photoArray[i].name;
    }
    localStorage.setItem("carusel-img", i);
}

function change(iconID) {
    const icon = document.getElementById(iconID);
    if (icon.className === "bi bi-play") {
        icon.className = "bi bi-pause";
        //toiminnonTunniste = window.setInterval(() => {nextPhoto();}, 2000);
        toiminnonTunniste = window.setInterval(nextPhoto, 1500); // functio ilman ()!!!
    } else {
        icon.className = "bi bi-play";
        window.clearInterval(toiminnonTunniste);
    }
}




