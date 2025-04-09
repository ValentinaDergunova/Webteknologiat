window.onload = function() {
    console.log("Tämä kirjoitetaan selaimen konsoliin");
    }
    
function init () {
    console.log('Page loaded');
}

function ShouMap () {
    address = document.getElementById('addr-field').value;
    nr = document.getElementById('nr-field').value;
    city = document.getElementById('city-field').value;
    place = 'https://www.google.com/maps?q=' + address + nr + city + '&output=embed';

    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
    console.log(place);
}