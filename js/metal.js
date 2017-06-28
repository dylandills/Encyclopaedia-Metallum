var apiKey = require('./../.env').apiKey;

Metal = function(){
};

Metal.prototype.getMetal = function(band, displayBand) {
  $.get('http://em.wemakesites.net/search/:band_name/:keyword' + '&appid=' + apiKey).then(function(response) {
    // displayBand(band, response.main.band);
    console.log(response.main.band);
  }).fail(function(error) {
    $('.showMetal').text(error.responseJSON.message);
  });
  // console.log(displayBand);
};

exports.metalModule = Metal;
