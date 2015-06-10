var fs = require('fs'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    create_deck = require('card-parser');


var get_demo_data = function () {
  var deck_name = "Psych Exam 2";
  var deck = create_deck('./card_files/exam_2.txt');
  var collection = db.collection('test');

  deck.forEach(function (card) {
    card.deck = deck_name;
  });

  collection.insert(deck, function (err, result) {
    if (err) throw err;

    console.log(result);
  });

};

var mongoclient = new MongoClient(new Server( 'localhost', 27017, { 'native_parser': true } ) );

var db = mongoclient.db('test');

mongoclient.open(function (err, mongoclient) {

  if (err) throw err;

  console.log('Connected to MDB successfully\nAttempting to load DB ...');

  get_demo_data();

});


