const { getSatelliteInfo } = require("tle.js/dist/tlejs.cjs");

const tle = `ISS (ZARYA)
1 25544U 98067A   17206.18396726  .00001961  00000-0  36771-4 0  9993
2 25544  51.6400 208.9163 0006317  69.9862  25.2906 15.54225995 67660`;

const observerLat = 37.709203;
const observerLng = -97.427754;

console.log(getSatelliteInfo(tle, null, observerLat, observerLng, 0));
