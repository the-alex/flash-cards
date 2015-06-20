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

var decks;
get_available_decks(function (err, available_decks) {
    decks = available_decks;
    console.log(decks);
});

console.log(decks);
