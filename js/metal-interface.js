var Metal = require('./../js/metal.js').metalModule;

var apiKey = require('./../.env').apiKey;

var displayBand = function(band, bandData) {
  $('.showMetal').text();
};

$(document).ready(function() {
  var currentMetalObject = new Metal();
  $('#metal').click(function() {
    var band = $('#metal-band').val();
    $('#metal-band').val("");
    currentMetalObject.getMetal(band, displayBand);
  });
});
