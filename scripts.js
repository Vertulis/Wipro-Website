
document.getElementById('ZA').addEventListener('mouseover', function() {
    document.getElementById('addresses').style.display = 'block';
});

document.getElementById('ZA').addEventListener('mouseleave', function() {
    document.getElementById('addresses').style.display = 'none';
});

$(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  
    // If you want to keep full screen on window resize
    $(window).resize(function(){
      $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
  });