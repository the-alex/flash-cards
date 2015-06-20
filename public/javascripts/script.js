function show_def() {
  var def_node = document.getElementById('definition');

  def_node.style.visibility = 'visible';
}

function update_card_details () {
  var word_node = document.getElementById('word');
  var def_node = document.getElementById('definition');
}


function get_rand_card (deck) {
  api_request = new XMLHttpRequest();

  api_request.open('get', '/rand?deck=' + deck, true);

  api_request.onreadystatechange = function () {
    update_card_details();
  }
}
