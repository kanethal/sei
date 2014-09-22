
$(document).ready(function() {

  var s = skrollr.init({forceHeight: false});


  function scale(){
  var height = $(window).height();
  var width = $(window).width();
  wp = width * 0.8;
  hp = height * 0.8;
  return{
    'width':width,
    'height':height,
    'wp':wp,
    'hp':hp
    };
  }

// Instantiate the popup on DOMReady, and enhance its contents
$( function() {
    $( "#contactpop" ).enhanceWithin().popup();
    var size = scale(),w=size.width,h=w*0.5;
//     $('.slider').css({'height':h, 'width':w});
    $('.hide').toggleClass('hide');
});

//Resize popup to screen on open
  $( '#contactpop').on({
    popupbeforeposition: function(){
      var size = scale(),w=size.width,h=size.height,hf=hp*0.5,wf=wp*0.95;
      $('#contactpop iframe').css('width',wf).css('height',hf);
    }
  });

// Close navigation after use
$(document).on('click', '.pageheader li > a', function(){
  $('#headernav').toggleClass('ui-collapsible-collapsed');
  $('#headernav>h1.ui-collapsible-heading').toggleClass('ui-collapsible-heading-collapsed');
  $('#headernav>div.ui-collapsible-content').toggleClass('ui-collapsible-content-collapsed');
});

// initial slider size = window h/w - pageheader
 $(function(){
   var size = scale();
   $('.slider').css('height', (size.height - $('.pageheader').height() - $('.footer').height()));
   s.refresh('.slider');
  });
  $(window).resize(function(){
    var size = scale();
    $('.slider').css('height', (size.height - $('.pageheader').height() - $('.footer').height()));
  s.refresh('.slider');
  });



//initialize skrollr after JQM page load

$(document).on("pagecreate", function(){
  alert('page create');
  s.refresh('.slider');

});


});
