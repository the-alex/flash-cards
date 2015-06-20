var fs = require('fs'),
    MongoClient = require('mongodb').MongoClient,
    create_deck = require('card-parser'),
    test = require('assert');

var mongo_url = 'mongodb://localhost:27017/FCD_test'


MongoClient.connect(mongo_url, function (err, db) {
  
  if (err) throw err;

  console.log('Successfully Connected!');

  var deck_name = "Psych Exam 3";
  var deck = create_deck('./card_files/exam_3.txt', deck_name);

  db.collection('decks', function (err, col) {
    if (err) throw err;

    col.insertMany(deck, function (err, result) {
      
      db.close();
    });

  });

});
