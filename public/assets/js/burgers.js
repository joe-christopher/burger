// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id"); //grab id from burger to devour
    var burgerID = { id: id}; //create obj with id
    var nowDevoured = true; //set devoured to true

    //create obj with id and devoured flag
    var nowDevouredState = {
      id: burgerID,
      devoured: nowDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: nowDevouredState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    //grab new burger name from input box
    var newBurger = { burger_name: $("#addBurger").val().trim()};
    //only POST if burger name length is > 0, prevents empty strings from being added
    if (newBurger.burger_name.length > 0){
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() { 
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }
  });

});

