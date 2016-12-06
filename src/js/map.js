
var map;

function	initialize() {
//Тут починаємо працювати з картою
    var mapProp = {
        center: new google.maps.LatLng(50.464379, 30.519131),
        zoom: 4
    };
    var html_element = document.getElementById("gmap");
    map = new google.maps.Map(html_element, mapProp);

    var point = new google.maps.LatLng(50.464379, 30.519131);
    var marker = new google.maps.Marker({
        position: point,
        map: map

    });


    google.maps.event.addListener(map, 'click',function(me){
        var coordinates	=	me.latLng;
        setMarker(coordinates);

    });

}


function setMarker(coor) {
    var point	=	coor;
    var marker	=	new	google.maps.Marker({
        position:	point,
        map:	map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

function geocode(name) {
    geocodeAddress(name, function (err, coor) {
        if(err)
            console.log(err)
        else
            setMarker(coor);
    })
}

function	geocodeAddress(address,	 callback)	{
    var geocoder	=	new	google.maps.Geocoder();
    geocoder.geocode({'address':	address},	function(results,	status)	{
        if	(status	===	google.maps.GeocoderStatus.OK&&	results[0])	{
            var coordinates	=	results[0].geometry.location;
            callback(null,	coordinates);
        }	else	{
            callback(new	Error("Can	not	find	the	adress"));
        }
    });
}

exports.initialize = initialize;
exports.geocode = geocode;

