$(document).ready(function(){

( function( $ ) {

  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');

    //FadeIn all sections
  function adjustWindow(){

    // Init Skrollr


    // Get window size
      winH = $window.height();

      // Keep minimum height 550
      if(winH <= 550) {
      winH = 550;
    }

      // Resize our slides
      $slide.height(winH);

      // Refresh Skrollr after resizing our sections


  }
  adjustWindow();
// Init Skrollr
var s = skrollr.init();

// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));

} )( jQuery );
//     function scale(){
//     var height=$(window).height();
//     var width=$(window).width();
//     wp= width * .8;
//     hp= height * .8;
//     return{
//       'width':width,
//       'height':height,
//       'wp':wp,
//       'hp':hp
//     };
//   };

// // Instantiate the popup on DOMReady, and enhance its contents
// $( function() {
//     $( "#contactpop" ).enhanceWithin().popup();
//     $('.hide').toggleClass('hide');
// });

// //Resize popup to screen on open
//   $( '#contactpop').on({
//     popupbeforeposition: function(){
//       var size = scale(),w=size.width,h=size.height,hf=hp*.5,wf=wp*.95;
//       $('#contactpop iframe').css('width',wf).css('height',hf);
//     }
//   });

// // Close navigation after use
// $(document).on('click', '.pageheader li > a', function(){
//   $('#headernav').toggleClass('ui-collapsible-collapsed');
//   $('#headernav>h1.ui-collapsible-heading').toggleClass('ui-collapsible-heading-collapsed');
//   $('#headernav>div.ui-collapsible-content').toggleClass('ui-collapsible-content-collapsed');
// });

// // Resize images with window
// $(window).resize(function(){
//   var size = scale(),w=size.width,h=w*.5;
//   $('.slider').css({'height':h, 'width':w});

// });

// $(window).on('scroll', function(){
//         $('.slider').each(function(r){
//             var pos = $(this).offset().top;
//             var scrolled = $(window).scrollTop();
//             $('.slider').css('background-position-y', -(scrolled * 0.3) + 'px');
//         });
//     });
//
// // alert('loaded');



});
