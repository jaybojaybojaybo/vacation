$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var iceCream = parseInt($("#iceCream").val());
    var season = parseInt($("#season").val());
    var emotion = parseInt($("#emotion").val());
    var contraption = parseInt($("#contraption").val());
    var relation = parseInt($("#relation").val());
    var total = (iceCream + season + emotion + contraption + relation);

    $("#NJ").hide();
    $("#singapore").hide();
    $("#bahia").hide();

    if ((total >= 50) && (total <= 99)) {
      $("#NJ").show();
    } else if ((total >= 100) && (total <= 174)) {
      $("#singapore").show();
    } else if ((total >= 175)) {
      $("#bahia").show();
    } else {
      alert("Please make all selections!");
    }

  });
});
