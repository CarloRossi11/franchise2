console.log("hello")

$(document).ready(function() {

  $("#go-btn").click(function(){
    var zip = $("#zipcode").val();
    $("#smallZIP").val(zip);
  })
