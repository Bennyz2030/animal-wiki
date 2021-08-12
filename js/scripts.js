$(document).ready(function() {
  $("#animal").change(function(event) {
    event.preventDefault();
    const animal = $("select#animal").val();

    if (animal === "turtle") {
      $("#turtles").show();
      $("#snakes").hide();
      $("#bees").hide();
    } else if (animal === "snake") {
      $("#turtles").hide();
      $("#snakes").show();
      $("#bees").hide();
    } else {
      $("#turtles").hide();
      $("#snakes").hide();
      $("#bees").show();
    }
  });
});