$(document).ready(function(){
  // Build Page
  //Footer
    $('.pagefooter').html("\
    <div data-role='footer' data-theme='b' data-id='footer' data-position='fixed' class='footer'>\
      <div data-role='navbar'>\
        <ul>\
          <li><a href='#contactpop' data-rel='popup' data-position-to='window' data-icon='phone'>Contact Us</a></li>\
          <li><a href='#home' data-icon='home'>Home</a></li>\
        </ul>\
      \
      </div>\
    </div>"
  );

  $('.pageheader').html("<div class='ui-bar ui-bar-a hide' style='text-align:center'>\
    <h1 id='title'>SEI Anesthesia</h1>\
    <img id='logo' src='img/SEIAlogo-Outlined.png' alt='SEI Anesthesia logo'>\
    <div id='headernav' data-role='collapsible' data-theme='b' data-inset='false' data-iconpos='notext' data-collapsed-icon='bars'>\
      <h1></h1>\
      <div data-role='navbar' id='navigation'>\
        <ul style='text-align:center' data-role='listview'>\
          <li data-icon='false'><a href='#home'>Home</a></li>\
          <li data-icon='false'><a href='#team'>Meet the Team</a></li>\
          <li data-icon='false'><a href='#ob'>Anesthesia for Labor and Delivery</a></li>\
          <li data-icon='false'><a href='#info'>Getting Ready for Surgery</a></li>\
          <li data-icon='false'><a href='#office'>Anesthesia Business Office</a></li>\
          <li data-icon='false'><a href='/index.html#contactpop' data-rel='popup' data-position-to='window'>Contact Us</a></li>\
        </ul>\
      </div>\
    </div>\
  </div>"
  );

});
