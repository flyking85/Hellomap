document.addEventListener("deviceready", function() {
  executeCode();
}, false);

function executeCode() {
  // In order to prevent freezing the device (because too much work),
  // waiting kind of times is better when you use the multiple maps in one page.
  setTimeout(function() {
    var div = document.getElementById("map_canvas1");
    var map = plugin.google.maps.Map.getMap(div);
    map.one(plugin.google.maps.event.MAP_READY, function() {
    console.log("--> map_canvas1 : ready.");
    });
  }, 3000);
}
