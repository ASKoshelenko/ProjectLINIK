// Google Maps JS & Settings Coordinates
// When the window has finished loading create our google map below
// https://developers.google.com/maps/documentation/

// google.maps.event.addDomListener(window, 'load', initMap);

// window.addEventListener('load', initMap);

function initMap() {
// Basic options for a simple Google Map

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    let mapElement = document.getElementById('map');

    if (mapElement) {
        //----------------- ADD YOUR SETTINGS HERE -----------------//


        // Add your coordinates. How to know coordinates: https://support.google.com/maps/answer/18539?hl=en
        let myLatlng = new google.maps.LatLng(49.982521, 36.246361);

        // Add your company name and some text about company
        let maptooltipbold = 'EasyCode';
        let maptooltip = 'IT курсы';


        //---------------------------------------------------------//


        let mapOptions = {

            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            //scroll zoom false
            scrollwheel: false,
            clickable: false,
            //on mobile
            draggable: !("ontouchend" in document),
            // The latitude and longitude to center the map (always required)
            center: myLatlng,

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{featureType:"landscape",
                stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",
                stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",
                stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",
                stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",
                stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",
                stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",
                stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",
                stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",
                stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",
                stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",
                stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
        };




        // Create the Google Map using out element and options defined above
        let map = new google.maps.Map(mapElement, mapOptions);

        // Image of toogle
        let image = 'img/contacts-map-marker.png';

        // Div's of toogle
        let content = document.createElement('div');
        content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";

        // Initialize tooltips
        let infowindow = new google.maps.InfoWindow({
            content: content
        });

        let marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            draggable: false,
            icon: image,
            animation: google.maps.Animation.BOUNCE
        });


        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
	}
	


}
