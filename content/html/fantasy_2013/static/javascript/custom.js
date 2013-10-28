$(document).ready(function() {
    $("tr").click(function() {
         if( $('td', this).css("background-color") == "rgb(0, 0, 0)") {
          $('td', this).css("background-color", "#FFFFFF");
         } else {
          $('td', this).css("background-color", "#000000");
         };
    });
});
