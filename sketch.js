var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('Leaflet');

//object map
var options = {
  lat: 0,
  lng: 0,
  zoom: 3,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  myLoc = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

// set as option the current location
  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  clear();
	fill("black");
	rect(90, 20, 470, 70)
	noStroke();
  fill('white')
  textSize(30);
  textStyle(BOLD);
  text("Death penalty around the world", 100, 50)
	textSize(13);
	fill("red")
  text("A quick example to show you how barbarians we still are", 100, 75)



// user current location
  var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  fill("black")
		noStroke();
  ellipse(point.x, point.y, 15);
  textSize(20);
  text("That's you", point.x + 15, point.y + 10)

// others location
// set latitude and lon
  var point1 = myMap.latLngToPixel(39.749616, -101.5413694)
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point1.x, point1.y, 15);

	var point2 = myMap.latLngToPixel(15.2879648, -90.0954513)
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point2.x, point2.y, 15);

	var point3 = myMap.latLngToPixel(4.9396878, -61.1976187)
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point3.x, point3.y, 15);


	var point4 = myMap.latLngToPixel(26.2900093,12.8354988 );
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point4.x, point4.y, 15);

	var point5 = myMap.latLngToPixel(26.8349577,26.382458 );
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point5.x, point5.y, 15);

	var point6 = myMap.latLngToPixel(15.7398829,25.7572154 );
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point6.x, point6.y, 15);

	var point7 = myMap.latLngToPixel(15.2632919,9.6961682);
stroke("black")
strokeWeight(2)
	fill("red")
  ellipse(point7.x, point7.y, 15);

	var point8 = myMap.latLngToPixel(9.0065059,4.1794793);
stroke("black")
strokeWeight(2)
	fill("red")
	ellipse(point8.x, point8.y, 15);

	var point9 = myMap.latLngToPixel(8.4206969,-12.9588662);
stroke("black")
strokeWeight(2)
	fill("red")
ellipse(point9.x, point9.y, 15);

var point10 = myMap.latLngToPixel(9.1214715,36.0014297);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point10.x, point10.y, 15);

var point11 = myMap.latLngToPixel(5.231027,41.8057881);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point11.x, point11.y, 15);

var point12 = myMap.latLngToPixel(-3.2833115,23.6578908);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point12.x, point12.y, 15);

var point13 = myMap.latLngToPixel(-22.2808323,20.1915084);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point13.x, point13.y, 15);

var point14 = myMap.latLngToPixel(23.7710044,44.7402755);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point14.x, point14.y, 15);

var point15 = myMap.latLngToPixel(15.3533999,43.6972287);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point15.x, point15.y, 15);

var point16 = myMap.latLngToPixel(33.311894,44.2154772);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point16.x, point16.y, 15);

var point17 = myMap.latLngToPixel(15.6378943,47.8687942);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point17.x, point17.y, 15);

var point18 = myMap.latLngToPixel(35.1833497,38.8578908);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point18.x, point18.y, 15);

var point19 = myMap.latLngToPixel(31.8796849,54.2665554);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point19.x, point19.y, 15);

var point20 = myMap.latLngToPixel(33.7768259,65.6597256);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point20.x, point20.y, 15);

var point21 = myMap.latLngToPixel(22.0499116,78.9021161);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point21.x, point21.y, 15);

var point22 = myMap.latLngToPixel(34.9862055,102.8387239);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point22.x, point22.y, 15);

var point23 = myMap.latLngToPixel(46.9125935,102.7344413);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point23.x, point23.y, 15);

var point24 = myMap.latLngToPixel(48.0663048,67.0445179);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point24.x, point24.y, 15);

var point25 = myMap.latLngToPixel(36.212213,138.3883843);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point25.x, point25.y, 15);

var point26 = myMap.latLngToPixel(4.5912096,102.0040383);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point26.x, point26.y, 15);

var point27 = myMap.latLngToPixel(-1.6202314,112.3255295);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point27.x, point27.y, 15);

var point28 = myMap.latLngToPixel(15.6058832,100.7425393);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point28.x, point28.y, 15);

var point29 = myMap.latLngToPixel(53.8847604,27.4529406);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point29.x, point29.y, 15);

var point30 = myMap.latLngToPixel(30.9936535,35.9396835);
stroke("black")
strokeWeight(2)
fill("red")
ellipse(point30.x, point30.y, 15);
}
