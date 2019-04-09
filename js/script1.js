
$(window).ready(updateHeight);
$(window).resize(updateHeight);
$(window).resize(updateHeight2);

// update hobby containers height when resize
function updateHeight()
{
    var div = $('.hobby');
    var width = div.width();
    div.css('height', width);
}
// update hobbyOnClick containers height when resize
function updateHeight2()
{
    var div = $('.hobbyOnClick');
    var width = 0.7262*div.width();
    div.css('height', width);
}


// Function which creates content of each hobby element
var chooseHobby = function()
{
    $(this).addClass('hobbyOnClick').removeClass('hobby firstInLine');
    $('.hobbyImg').hide();
    $('.hobby').css('display', 'none');
    // Sport section
    $('.cancel, .sportImg, .sportText').show();
    $('.sportImg, .sportText').css('display', 'inline-block');
    // Sport section
    // Travel section
    $('#map').show();
    
    // Travel section
    updateHeight2();
};

// Function which close hooby section
var closeHobby = function()
{
    // General section
    $(this).parent().removeClass("hobbyOnClick");
    $(this).parent().addClass("hobby firstInLine");
    $('.hobbyImg').show();
    $('.hobby').css('display', 'inline-block');
    $(this).hide();
    // General section
    // Sport section
    $(this).siblings(".sportImg, .sportText").hide();
    // Sport section
    // Travel section
    $('#map').hide();
    // Travel section


    updateHeight();
};

// Initialize and add the map
var initMap = function(){
  // map options variable

  var options = {
      zoom:4,
      center:{lat:53.123482, lng:18.008438},
            styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
  };
  // map location variable
  var locations = [
    ['Prague', "50.0874654", "14.4212535", 1],
    ['Bratislava', "48.1359085", "17.1597441", 2],
    ['Rijeka', "45.3269357", "14.4409841", 3],
    ['Sharm el Sheikh', "27.8669", "34.30150000000003", 4],
    ['Paris', "48.8566101", "2.3514992", 5],
    ['London', "51.5073219", "-0.1276474", 6],
    ['Moscow', "55.7507178", "37.6176606", 7],
    ['St. Petersburg', "59.938732", "30.316229", 8],
    ['Sandefjord', "59.0799004", "10.2804322", 9],
    ['Kos', "36.7939719", "27.0850811", 10],
    ['Alanya', "36.5472591", "32.0011182", 11],
    ['Strömstad', "58.9381501", "11.1787303", 12]
  ];

  // new info window
    var infowindow = new google.maps.InfoWindow();
  // additional variables
    var marker, i;

  // The map
  var map = new google.maps.Map(
      document.getElementById('map'), options);

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

};
$(document).ready(function()
{
    $(this).on('click',".hobby", chooseHobby);
    $(this).on('click',".hobby", initMap);
    $(this).on('click',".cancel", closeHobby);
});
