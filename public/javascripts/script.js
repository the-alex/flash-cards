function show_def() {
  var def_node = document.getElementById('definition');
  def_node.style.visibility = 'visible';
}

function update_card_div_details (card_object) {
  // Get the elements we want to change
  var word_node = document.getElementById('word');
  var def_node = document.getElementById('definition');

  // Hide the new details
  def_node.style.visibility = 'hidden';
  
  // Update info with new card_object
  word_node.innerHTML = card_object.word;
  def_node.innerHTML = card_object.definition;

}

function get_rand_card (deck) {
  api_request = new XMLHttpRequest();

  api_request.open('get', '/rand?deck_choice=' + deck, true);
  api_request.send();

  api_request.onreadystatechange = function () {
    if (api_request.status == 200) {
      // Convert response text to JSON
      var new_card = JSON.parse(api_request.responseText);
      update_card_div_details(new_card);
    }
  }
}
