$(document).ready(function() {
  
  $("#btn").click(function() {
    var toAdd = $("input[name=items]").val();
    $(".list").append('<div class="list">' + toAdd + '</div>');
  });
  $("#btn").mouseenter(function() {
    $("#btn").fadeTo("fast", 0.5);
  });
  $("#btn").mouseleave(function() {
    $("#btn").fadeTo("slow", 1);
  });
});
