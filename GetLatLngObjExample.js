const { getLatLngObj } = require("tle.js/dist/tlejs.cjs");

const tle = `ISS (ZARYA)
1 25544U 98067A   17206.18396726  .00001961  00000-0  36771-4 0  9993
2 25544  51.6400 208.9163 0006317  69.9862  25.2906 15.54225995 67660`;

let satPos = getLatLngObj(tle);
let lat = "N";
let lng = "E";

if (satPos.lat < 0) {
  lat = "S";
}
if (satPos.lng < 0) {
  lng = "W";
}
console.log(
  "Latitude: " + Math.abs(satPos.lat) + " " + lat + ", " + "Longitude: ",
  Math.abs(satPos.lng) + " " + lng
);
