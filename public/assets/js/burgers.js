// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    var burgerID = { id: id};
    var nowDevoured = true;

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

    var newBurger = { burger_name: $("#addBurger").val().trim()};
    console.log("newBurger = " + newBurger.burger_name);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

