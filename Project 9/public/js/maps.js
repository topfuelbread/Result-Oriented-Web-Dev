
let map;
let geo;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

// function geoSet(){
//     geo = new google.maps.Geocoder();
//     geo.geocode({'address':title}, (results,status)=>{
//         if (status == 'OK)'){
//             map.setCenter(results[0].geometry.location);
//             var marker = new google.maps.Marker({
//                 map: map,
//                 position: results[0].geometry.location
//             });
//           } 
//           else {
//             alert('Geocode was not successful for the following reason: ' + status);
//           }
//     });
// }