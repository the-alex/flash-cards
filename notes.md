Flash-cards Project Notes
=========================

## Scratch

* Does this work as intended?
    * ```javascript
    var this_obj = {
        attribute: 'value',
        'attribute': 'value',
    }```

* We want to include our card-parser module in the index.js controller
* The controller will then load the file and create a deck ...
* The deck will be passed into the render function as an array of cards ...
    * How do I only display one card at a time?
    * How do I render only the word until the definition is needed?
        * Currently, we load all the text at once ... Keep a global counter to index cards.
        * Is this _good enough_?
        * Make a request for each card in sequence? We don't want to render all the cards at once ...
        * ```javascript
            button.onClick = function () {
                next_card = make_API_request('card:i++'); 
                update_DOM(next_card);
            }```

## TODO
* Add a selection form to the index page.
    * Allow a user to select a deck of cards from a list.
    * Post to index with desired deck.
    * Allow buttons to select cards via asynch get.
        * Can we create an api sort of thing that gets a json and updates the page?

## Planned Features

* Add Database Functionality
* Select Card Deck
* User Card Filtering
    * Allow user to select the cards they want from a dropdown.
* User Score/Stat Tracking
* Single Page Revision

