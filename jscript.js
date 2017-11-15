function initMap(){
  var bSunday = {lat: 41.927835, lng: -87.706510};
  var map = new google.maps.Map(document.getElementById('map'), {
  center: bSunday,
  zoom: 16
  });
        
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: 'ChIJa2SIvXrND4gRrPqCMMhIes0'
    }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        place.formatted_address + '</div>');
        infowindow.open(map, this);
        });
       }
    });
  }