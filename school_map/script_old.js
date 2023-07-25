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
for (let x = 0; x < coordsCount / 2 / 2; x++) {
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

// map.setView(cictBLDG, 0);

// route location
// let choice = confirm("Would you like to go somewhere?");
// let choiceLocation = window.prompt(
//   "Where do you want to go? \n 1 = Student Gate \n 2 = Sari-Gamit \n 3 = Medina Bldg \n 4 = CICT Bldg \n 5 = Admin Bldg \n 6 = OSA Bldg",
//   ""
// );
// if (choice) {
//   switch (parseInt(choiceLocation)) {
//     case 1:
//       console.log("Teehee 1!");
//       map.setView(studentGate, 0);
//       break;
//     case 2:
//       map.setView(sariGamit, 0);
//       break;
//     case 3:
//       map.setView(medinaBLDG, 0);
//       break;
//     case 4:
//       map.setView(cictBLDG, 0);
//       break;
//     case 5:
//       map.setView(registrar, 0);
//       break;
//     case 6:
//       map.setView(osaBLDG, 0);
//       break;
//     default:
//       break;
//   }
// }

// -----**ONLINE MAP**------
// // map initialization
// var map = L.map("map").setView([14.67671, 120.52867], 19);

// // os layer
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// // location testing
// // library
// var library = L.polygon([
//   [14.67722, 120.52956],
//   [14.67733, 120.52992],
//   [14.67717, 120.52998],
//   [14.67706, 120.52961],
// ]).addTo(map);
// library.bindPopup("BPSU Library");

// // pane test
// map.createPane("labels");
// map.getPane("labels").style.zIndex = 650;
// map.getPane("labels").style.pointerEvents = "none";
// var positron = L.tileLayer(
//   "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
//   {
//     attribution: "©OpenStreetMap, ©CartoDB",
//   }
// ).addTo(map);

// var positronLabels = L.tileLayer(
//   "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",
//   {
//     attribution: "©OpenStreetMap, ©CartoDB",
//     pane: "labels",
//   }
// ).addTo(map);

// var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(map);
// geojson.eachLayer(function (layer) {
//   layer.bindPopup(layer.feature.properties.name);
// });

// map.fitBounds(geojson.getBounds());
