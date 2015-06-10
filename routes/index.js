var express = require('express');
var router  = express.Router();
var fs      = require('fs');

// Custom deck creating function.
// Takes path/to/file as argument.
// Returns array of cards.
var create_deck = require('card-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Adding Selection Feature -------
  // Get the contents of the "card_files/" directory.
  // var availible_decks = fs.readdirSync('card_files/');


  // var deck = create_deck(process.cwd() + '/card_files/test1.txt');

  // var index = 0;
  // // Get the index from the params if there was one.
  // if (!(index = req.query.index)) {
  //   index = 0;
  // }
  //
  // if (req.query.rand == "true") {
  //   index = Math.floor(Math.random() * deck.length);
  // }

  res.render('index', {
    // Items to pass to jade go here.
  });
});

// TODO: Add post for deck selection form sumbition
router.post('/', function (req, res, next) {

});


module.exports = router;
