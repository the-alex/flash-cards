var express = require('express');
var router = express.Router();

// Custom deck creating function.
// Takes path/to/file as argument.
// Returns array of cards.
var create_deck = require('card-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  // For now, load default deck for testing ...
  // var deck = create_deck('/Users/theProfessional/Development/repositories/flash-cards/node_modules/card-parser/test1.txt');
  var deck = create_deck(process.cwd() + '/card_files/test1.txt');

  var index = 0;
  // Get the index from the params if there was one.
  if (!(index = req.query.index)) {
    index = 0;
  }

  if (req.query.rand == "true") {
    index = Math.floor(Math.random() * deck.length);
  }

  res.render('index', {
    title: 'Express',
    deck: deck,
    index: index
  });
});

module.exports = router;
