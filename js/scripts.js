function Destination (inputName, inputLocation, inputLandmarks, inputDate, inputNotes){
  this.name = inputName;
  this.location = inputLocation;
  this.landmarks = inputLandmarks;
  this.date = inputDate;
  this.notes = inputNotes;
}


$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    // debugger;

    var inputName = $("input#new-name").val();
    var inputLocation = $("input#new-location").val();
    var inputLandmark = $("input#new-landmarks").val();
    var inputTime = $("input#new-time").val();
    var inputNotes = $("input#new-notes").val();

    var newDestination = new Destination(inputName, inputLocation, inputLandmark, inputTime, inputNotes);

    console.log(newDestination);

    $("#destinationList").append("<li><span class='destination'>" + newDestination.name + "</span></li>");

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.name);
      $(".location").text(newDestination.location);
      $(".landmarks").text(newDestination.landmarks);
      $(".timeOfYear").text(newDestination.date);
      $(".notes").text(newDestination.notes);
    });

    $("input#new-name").val("");
    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");

  });
});
