var fs = require('fs'),
    MongoClient = require('mongodb').MongoClient,
    create_deck = require('card-parser'),
    test = require('assert');

var mongo_url = 'mongodb://localhost:27017/FCD_test'


MongoClient.connect(mongo_url, function (err, db) {
  
  if (err) throw err;

  console.log('Successfully Connected!');

  var deck_name = "Psych Exam 2";
  var deck = create_deck('./card_files/exam_2.txt');

  // A deck in mongo will be a deck (array of cards),
  // and a deck_name;

  var new_deck_document = {
    deck_name: deck_name,
    deck: deck
  }


  db.collection('decks', function (err, col) {
    if (err) throw err;

    console.log(col);

    col.insertOne(new_deck_document, function (err, result) {
      test.equal(null, err);
      test.equal(1, result.insertCount);
      db.close();
    });
  });

  // // Synchronous call to DB for the decks collection.
  // var mongo_deck_col = db.collection('decks', {strict: true});

  // console.log(mongo_deck_col);

  // mongo_deck_col.insertOne(new_deck_document, function (err, r) {
  
  //   test.equal(null, err);
  //   test.equal(1, r.insertCount);
  //   // It did what we thought it would!
  //   // Inserted one doc and succeeded at that!
    
  //   // Close the connection.
  //   db.close();
  
  // });

});
