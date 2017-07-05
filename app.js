var lat = "41.0065138";
var long = "-91.96376930000001";

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
      $("#data").html(
         "latitude: " +
            position.coords.latitude +
            "<br>longitude: " +
            position.coords.longitude
      );
      lat = position.coords.latitude;
      console.log("The program finally found out the lat: " + lat);
      long = position.coords.longitude;
      console.log("The program finally found out the long: " + long);
   });
}
console.log("latitude is: " + lat);

var baseURL = "https://api.openweathermap.org/data/2.5/weather";
var ourLocation = "?lat=" + lat + "&lon=" + long;
var apiKey = "&APPID=949cae6f3c163637257dc1ec1af85e5c";
var units = "&units=imperial";

var endpoint = baseURL + ourLocation + apiKey + units;





$.getJSON(endpoint,
   function(payload) {
      $("#temperature").html(payload.currently.temperature);
   }
);