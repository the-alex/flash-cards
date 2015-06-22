var express     = require('express');
var router      = express.Router();
var fs          = require('fs');
var MongoClient = require('mongodb').MongoClient;

var mongo_url = 'mongodb://localhost:27017/FCD_test';

var get_available_decks = function (callback) {
  // Connect to DB
  MongoClient.connect(mongo_url, function (err, db) {
    if (err) throw err;

    console.log('Successfully Connected!');

    db.collection('decks', function (err, col) {
      if (err) throw err;

      col.distinct('decks', function (err, distinct_deck_names) {
        if (err) throw err;

        db.close();
        callback(null, distinct_deck_names);

      });
    });

  });
}

var get_deck = function (deck, callback) {

  MongoClient.connect(mongo_url, function (err, db) {
    if (err) throw err;

    console.log('Successfully Connected!');

    db.collection('decks', function (err, col) {
      if (err) throw err;

      col.find({decks: deck}).toArray(function (err, review_deck) {
        if (err) throw err;

        db.close();
        callback(null, review_deck);

      });
    });

  });
}

var get_random_card = function (deck, callback) {
  // Returns a random card in the deck array.
  get_deck(deck, function (err, deck_array) {
    // var rand_min = 20;
    // var rand_range = 20;
    // var random_index = rand_min + Math.floor(Math.random() * rand_range);
    
    var random_index = Math.floor(Math.random() * deck_array.length);
    var random_card = deck_array[random_index];
    callback(null, random_card);
  });
};

// TODO :: Actually make that DB handler.
// var card_db = require('card-db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Get available decks.
  get_available_decks(function (err, decks) {
    res.render('index', {
      available_decks: decks
    });
  });
});


router.get('/rand', function (req, res, next) {
  var deck_choice = req.query.deck_choice;

  get_random_card(deck_choice, function (err, card) {
    res.write
    res.json(card);
  });
});

router.get('/review', function (req, res, next) {

  // Similar to the api- but we render the review html as well.
  var deck_choice = req.query.deck_choice;

  get_random_card(deck_choice, function(err, card) {

    res.render('review', {
      card: card,
      review_deck: deck_choice
    });
  });
});

module.exports = router;
