var Metal = require('./../js/metal.js').metalModule;

var displayBand = function(band, bandName, bandGenre, bandCountry) {
  $('.showMetal').text("The band you were searching for was " + band + ". " + "Here's some info about them from the Encyclopedia Metallum: " + " Name: " + bandName + ", Genre: " + bandGenre + ", Country of Origin: " + bandCountry);
};

var displayRandom = function(bandName, bandGenre, bandCountry) {
  $('.randomMetal').text("The band you were searching for was " + band + ". " + "Here's some info about them from the Encyclopedia Metallum: " + " Name: " + bandName + ", Genre: " + bandGenre + ", Country of Origin: " + bandCountry);
};
// console.log(displayBand);

$(document).ready(function() {
  var currentMetalObject = new Metal();
  $('#metal').click(function() {
    var band = $('#metal-band').val();
    $('#metal-band').val("");
    currentMetalObject.getMetal(band, displayBand);
  });

  var randomMetalObject = new Metal();
  $('#random').click(function() {
    randomMetalObject.getRandom(displayRandom);
  });
});
