function initMap() {
  "use strict";
  var bSunday = {lat: 41.927835, lng: -87.706510};
  var map = new google.maps.Map(document.getElementById("map"), {
  center: bSunday,
  zoom: 16,
  gestureHandling: "greedy",
  styles: [
            {elementType: "geometry", stylers: [{color: "#242f3e"}]},
            {elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}]},
            {elementType: "labels.text.fill", stylers: [{color: "#746855"}]},
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{color: "#d59563"}]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{color: "#d59563"}]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{color: "#263c3f"}]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{color: "#6b9a76"}]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{color: "#38414e"}]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{color: "#212a37"}]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{color: "#9ca5b3"}]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{color: "#746855"}]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{color: "#1f2835"}]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{color: "#f3d19c"}]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{color: "#2f3948"}]
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{color: "#d59563"}]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{color: "#17263c"}]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{color: "#515c6d"}]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{color: "#17263c"}]
            }
          ]
  });

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: "ChIJa2SIvXrND4gRrPqCMMhIes0"
    }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        animation: google.maps.Animation.BOUNCE
        });
        google.maps.event.addListener(marker, "click", function() {
        marker.setAnimation(null);
        infowindow.setContent("<div><strong>" + place.name + "</strong><br>" +
        place.formatted_address + "</div>");
        infowindow.open(map, this);
        });
       }
    });
  }