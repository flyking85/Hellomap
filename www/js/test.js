document.addEventListener("deviceready", function() {
  executeCode();
}, false);

function executeCode() {
  // In order to prevent freezing the device (because too much work),
  // waiting kind of times is better when you use the multiple maps in one page.
  setTimeout(function() {
//    var div = document.getElementById("map_canvas1");
//    var map = plugin.google.maps.Map.getMap(div);
//    map.one(plugin.google.maps.event.MAP_READY, function() {
//    console.log("--> map_canvas1 : ready.");
//    });

  var div = document.getElementById("map_canvas1");
  var map = plugin.google.maps.Map.getMap(div);
  map.one(plugin.google.maps.event.MAP_READY, function() {

  var onSuccess = function(location) {
  var msg = ["Current your location:\n",
  "latitude:" + location.latLng.lat,
  "longitude:" + location.latLng.lng,
  "speed:" + location.speed,
  "time:" + location.time,
  "bearing:" + location.bearing].join("\n");


  map.addMarker({
  'position': location.latLng,
  'title': msg
  }, function(marker) {
  map.animateCamera({
  target: location.latLng,
  zoom: 16
  }, function() {
  marker.showInfoWindow();
  });
  });
  };

  var onError = function(msg) {
  alert(JSON.stringify(msg));
  };

  var button = div.getElementsByTagName('button')[0];
  button.addEventListener('click', function() {
  map.clear();
  map.getMyLocation(onSuccess, onError);
  });

  });


  }, 3000);
}
