var apiKey = require('./../.env').apiKey;

Metal = function(){
};

Metal.prototype.getMetal = function(band, displayBand) {
  $.get('http://em.wemakesites.net/search/band_name/' + band + '?api_key=' + apiKey).then(function(response) {
    var parsedResponse = JSON.parse(response);
    displayBand(band, parsedResponse.data.search_results[0].name, parsedResponse.data.search_results[0].genre, parsedResponse.data.search_results[0].country);
    console.log(parsedResponse);
  }).fail(function(error) {
    $('.showMetal').text(error.responseJSON.message);
  });
};

Metal.prototype.getRandom = function(displayRandom) {
  $.get('http://em.wemakesites.net/band/random/' +'?api_key=' + apiKey).then(function(response) {
    var parsedResponse = JSON.parse(response);
    console.log(parsedResponse);
    displayRandom(parsedResponse.data.band_name, parsedResponse.data.details.genre, parsedResponse.data.details.country);
  }).fail(function(error) {
    $('.randomMetal').test(error.responseJSON.message);
  });
};

exports.metalModule = Metal;
