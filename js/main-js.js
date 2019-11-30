// ======= bootstrap carousel ======= //
$('.carousel').carousel();



// ======= Google Map Api ======= //
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 59.9387942, lng: 30.323083300000008}; /*59.9387942*/ /*30.323083300000008*/
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
  	position: uluru,
	map: map,
	icon: 'img/map-marker.png'
  	});
}



