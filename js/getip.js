$(document).ready( function() {
    $.getJSON( "http://smart-ip.net/geoip-json?callback=?",
        function(data){
            alert( data.host);
        }
    );
});
