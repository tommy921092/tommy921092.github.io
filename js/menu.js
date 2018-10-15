// close the menu on click
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
// close the menu
   function closeMenu() {
       $('#toggle').toggleClass('active');
       $('#overlay').toggleClass('open');
   }


