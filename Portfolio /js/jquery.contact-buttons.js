/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function ($) {

  var oContainer = $("#contact-buttons-bar");

  // Make the buttons visible
 

  // Show/hide buttons
  $('body').on('click', '.show-hide-contact-bar', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    $('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');
    oContainer.find('.cb-ancor').toggleClass('cb-hidden');
  });

 }( jQuery ));

