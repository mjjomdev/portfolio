// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.578380,126.973777);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"아름지기 문화재단"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "아름지기 문화재단"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

