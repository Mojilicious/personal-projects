// -----**DEVELOPMENT MAP**-----
// map initialization
var map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
});

// wrapper initialization
var yx = L.latLng;

var xy = function (x, y) {
  if (Array.isArray(x)) {
    // When doing xy([x, y]);
    return yx(x[1], x[0]);
  }
  return yx(y, x); // When doing xy(x, y);
};

// array of coordinates

const coordinates = [
  [xy(482, 2074), "Sari Gamit Court"],
  [xy(95, 2800), "Student Gate"],
  [xy(1725, 1625), "Medina Lacson Bldg."],
  [xy(2381, 2073), "CICT Bldg."],
  [xy(1030, 3123), "Registrar"],
  [xy(1748, 1000), "OSA Bldg."],
];
console.log(coordinates[0][0]);

// count elements in array
const coordsCount = coordinates.reduce(
  (currentCount, row) => currentCount + row.length,
  0
);

// loop to set popup
for (let x = 0; x < coordsCount / 2; x++) {
  L.marker(coordinates[x][0]).addTo(map).bindPopup(coordinates[x][1]);
}

// set maxbounds of map
var corner1 = L.latLng(0, 0),
  corner2 = L.latLng(4096, 4096),
  bounds = L.latLngBounds(corner1, corner2);

// os layer
// var imageURL = "assets/images/bpsu_mapDevelopment.jpg";
L.imageOverlay("assets/images/bpsu_mapDevelopment.jpg", bounds).addTo(map);
map.fitBounds(bounds);
