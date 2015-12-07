'use strict';

/**
 * Controller that renders our index (home) page.
 */

var events = require('../models/events');

function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': 'Divine Surf',
    'tagline': 'You should put on some sunscreen.',
    'events': []
  };
  for(var i=0; i < events.all.length; i++){
    var event = events.all[i]
    if (event.date > now){
    contextData.events.push(event);
    }
  }
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
