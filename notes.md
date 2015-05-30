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

## Misc
Testing
* `$ DEBUG=flash-cards:* npm start`


## TODO
* Implement preliminary UI
    * Add card controls
        * Next
        * Show Def
        * Prev
    * Add global counter for deck index.
