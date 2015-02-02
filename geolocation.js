var geo_available = false;

window.onload = function () {
    if ("geolocation" in navigator) {
        geo_available = true;
    } else {
        alert("Your browser does not seem to support geolocation; please consider using another browser.");
    }
};

var cur_position = navigator.geolocation.getCurrentPosition(setMap);

function setMap() {
    var mapOptions = {
      center: { lat: cur_position.latitude, lng: cur_position.longitude},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);