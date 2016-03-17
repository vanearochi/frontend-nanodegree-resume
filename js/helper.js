


//$(document).ready(function() {



// var all = function(json){

// 	console.log(json);
// 	console.log(json.results[0].geometry.location)
// 	var location=json.results[0].geometry.location
// 	var map = new google.maps.Map(mapDiv, {
//       center: location,
//       zoom: 5
//     });

// addMarker(location, map);
//     function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   var marker = new google.maps.Marker({
//     position: location,
//     //label: labels[labelIndex++ % labels.length],
//     map: map
//   });
// }

// addMarker({lat: 19, lng: -99}, map)

// //google.maps.event.addDomListener(window, 'load', initMap);
// }

// 	$.ajax({
// 	url: "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area:Mexicocity&key=AIzaSyDTeOjNaYrSL42NWlEtjY7UsKnf-bazI8Y",
// 	success: all
// })


//});

// var map;    // declares a global map variable


// /*
// Start here! initializeMap() is called when page is loaded.
// */
// function initializeMap() {

//   var locations;

//   var mapOptions = {
//     disableDefaultUI: true
//   };

//   /*
//   For the map to be displayed, the googleMap var must be
//   appended to #mapDiv in resumeBuilder.js.
//   */
//   map = new google.maps.Map(document.querySelector('#map'), mapOptions);

//   function locationFinder() {
//   locations=["Mexico, Morelia"];
//    return locations;
//   }
// }

// function createMapMarker(placeData) {

//     // The next lines save location data from the search result object to local variables
//     var lat = placeData.geometry.location.lat();  // latitude from the place service
//     var lon = placeData.geometry.location.lng();  // longitude from the place service
//     var name = placeData.formatted_address;   // name of the place from the place service
//     var bounds = window.mapBounds;            // current boundaries of the map window

//     // marker is an object with additional data about the pin for a single location
//     var marker = new google.maps.Marker({
//       map: map,
//       position: placeData.geometry.location,
//       title: name
//     });

//     // infoWindows are the little helper windows that open when you click
//     // or hover over a pin on a map. They usually contain more information
//     // about a location.
//     var infoWindow = new google.maps.InfoWindow({
//       content: name
//     });

//     // hmmmm, I wonder what this is about...
//     //google.maps.event.addListener(marker, 'click', function() {
//       // your code goes here!
//     //});
//      bounds.extend(new google.maps.LatLng(lat, lon));
//     // fit the map to the new marker
//     map.fitBounds(bounds);
//     // center the map
//     map.setCenter(bounds.getCenter());
//   }

// function callback(results, status) {

//      console.log(results);

//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       createMapMarker(results[0]);
//     }
//   }
//   callback()

//   /*
//   pinPoster(locations) takes in the array of locations created by locationFinder()
//   and fires off Google place searches for each location
//   */
//   function pinPoster(locations) {

//     // creates a Google place search service object. PlacesService does the work of
//     // actually searching for location data.
//     var service = new google.maps.places.PlacesService(map);

//     // Iterates through the array of locations, creates a search object for each location
//       locations.forEach(function(place){
//       // the search request object
//       var request = {
//         query: place
//       };

//       // Actually searches the Google Maps API for location data and runs the callback
//       // function with the search results after each search.
//       service.textSearch(request, callback);
//     });
//   }

//   //window.mapBounds = new google.maps.LatLngBounds();

//   // locations is an array of location strings returned from locationFinder()
//   locations = ["Morelia", "Tizayuca"];

//   // pinPoster(locations) creates pins on the map for each location in
//   // the locations array
//   pinPoster(locations);



// /*
// Uncomment the code below when you're ready to implement a Google Map!
// */

// // Calls the initializeMap() function when the page loads
// window.addEventListener('load', initializeMap);

// // Vanilla JS way to listen for resizing of the window
// // and adjust map bounds
// window.addEventListener('resize', function(e) {
//   //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
// });


