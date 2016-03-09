$(window).load(function() {
  document.getElementById("container").style.minHeight = window.innerHeight + "px";
});
$(window).resize(function() {
  document.getElementById("container").style.minHeight = window.innerHeight + "px";
});

$(document).ready(function() {
  $("#opener").click(function() {
      $("#menu_short").slideToggle();
  });
});
$(window).load(function() {
  $("#menu_short").hide(100);
});
$(window).resize(function() {
  $("#menu_short").hide(100);
});